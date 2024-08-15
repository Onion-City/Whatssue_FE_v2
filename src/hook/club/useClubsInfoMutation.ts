import { http } from "@/apis/http";
import { ClubModifyFormData } from "@/features/info/club/modify/components/ClubInfoModifyForm";
import { FormatClubId } from "@/utils/extractPathElements";
import useToast from "@/utils/useToast";
import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import { useRouter } from "next/navigation";

interface ModifyClubProps {
  data: ClubModifyFormData,
  imageIsChanged: boolean;
};

// 모임 수정 (/clubs)
async function modifyClubs({
  data,
  imageIsChanged
}: ModifyClubProps
): Promise<AxiosResponse<string>> {
  const resData = new FormData();
  resData.append(
    "request",
    new Blob(
      [
        JSON.stringify({
          clubName: data.clubName,
          clubIntro: data.clubIntro,
          contactMeans: data.contactMeans,
          link: data.link,
          imageIsChanged: imageIsChanged
        }),
      ],
      { type: "application/json" }
    )
  );
  if (typeof data.clubProfileImage === "object" && "imageFile" in data.clubProfileImage)
    resData.append("profileImage", String(data.clubProfileImage));

  const config = {
    headers: {
      accept: "*/*",
      "Content-Type": "multipart/form-data",
    },
  };
  try {
    console.log(resData);
    const clubId = FormatClubId();
    const res = await http.patch<AxiosResponse<string>>(`/clubs/${clubId}/info`, resData, config);
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

interface UseModifyClubs {
  mutate: ({
    data,
    imageIsChanged
  } : ModifyClubProps
  ) => void;
}

// interface ClubResType {
//   clubId: number;
// }

export function useClubsInfoMutation(): UseModifyClubs {
  const router = useRouter();
  const { showToast } = useToast();

  const { mutate } = useMutation<AxiosResponse<string>, Error, ModifyClubProps>({
    mutationFn: modifyClubs,
    onSuccess: (res) => {
      const clubId = FormatClubId();
      if (res.status === 200) {
        showToast({
          message: "모임 수정이 완료되었습니다.",
          type: "success"
        });
        console.log(res);
        router.push(`/info/${clubId}`);
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
