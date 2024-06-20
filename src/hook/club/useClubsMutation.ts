import { http } from "@/apis/http";
import { ClubFormData } from "@/types/club";
import { useMutation } from "@tanstack/react-query";

// 모임 생성 (/clubs)
async function createClub(data: ClubFormData): Promise<void> {
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
    const res = await http.post(`/clubs`, resData, config);
    console.log(res);
    return;
  } catch (error) {
    console.error("Error creating board:", error);
  }
}

interface UseCreateClubs {
  mutate: (data: ClubFormData) => void; // 매개변수 추가
}

export function useClubsMutation(): UseCreateClubs {
  const { mutate } = useMutation<void, Error, ClubFormData>({
    mutationFn: createClub,
    onSuccess: () => {
      console.log("모임 등록 성공");
    },
    onError: (error) => {
      console.log("모임 등록 실패", error);
    },
  });
  return { mutate };
}
