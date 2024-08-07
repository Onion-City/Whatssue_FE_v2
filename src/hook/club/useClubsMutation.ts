import { http } from "@/apis/http";
import { ClubFormData } from "@/types/club";
import useToast from "@/utils/useToast";
import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import { useRouter } from "next/navigation";

// 모임 생성 (/clubs)
async function createClub(data: ClubFormData): Promise<AxiosResponse<ClubResType>> {
  const resData = new FormData();
  resData.append(
    "request",
    new Blob(
      [
        JSON.stringify({
          clubName: data.clubName,
          clubIntro: data.clubIntro,
          isPrivate: data.isPrivate,
          contactMeans: data.contactMeans,
          namePolicy: data.namePolicy,
          link: data.link,
        }),
      ],
      { type: "application/json" }
    )
  );
  if (data.profileImage && data.profileImage.imageFile)
    resData.append("profileImage", data.profileImage.imageFile);

  const config = {
    headers: {
      accept: "*/*",
      "Content-Type": "multipart/form-data",
    },
  };
  try {
    const res = await http.post<AxiosResponse<ClubResType>>(`/clubs`, resData, config);
    console.log(res);
    if (res.status) {
      return res;
    } else {
      throw new Error("Failed to create club");
    }
  } catch (error: any) {
    alert(error.response.data.errors[0].message);
    console.error("Error creating board:", error);
    throw error;
  }
}

interface UseCreateClubs {
  mutate: (data: ClubFormData) => void;
}

interface ClubResType {
  clubId: number;
}

export function useClubsMutation(): UseCreateClubs {
  const router = useRouter();
  const { showToast } = useToast();

  const { mutate } = useMutation<AxiosResponse<ClubResType>, Error, ClubFormData>({
    mutationFn: createClub,
    onSuccess: (res) => {
      if (res.status === 200) {
        showToast({
          message: "모임 등록이 완료되었습니다.",
          type: "success"
        });
        console.log(res);
        router.push('/');
      }
    },
    onError: (error) => {
      if ((error as AxiosError).isAxiosError) {
        const axiosError = error as AxiosError<any>;
        if (axiosError.response) {
          showToast({
            message: `${axiosError.response.data.message.errors[0].message}`,
            type: 'error'
          });
        }
      }
    },
  });
  return { mutate };
}
