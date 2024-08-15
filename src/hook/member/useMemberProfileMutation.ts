import { http } from "@/apis/http";
import { FormatClubId } from "@/utils/extractPathElements";
import useToast from "@/utils/useToast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";

export function useMemberProfileMutation() {
  const router = useRouter();
  const { showToast } = useToast();
  const queryClient = useQueryClient();
  const clubId = FormatClubId();

  return useMutation({
    mutationFn: (data: FormData) =>
      http.post(`/clubs/${clubId}/member/profile`, data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["clubMemberList", [clubId]],
      });
      console.log("프로필 등록 성공");
      showToast({
        message: "프로필 등록 성공",
        type: "success",
      });
      router.back();
    },
    onError: (error) => {
      console.log("프로필 등록 실패", error);
      if ((error as AxiosError).isAxiosError) {
        const axiosError = error as AxiosError<any>;
        if (axiosError.response) {
          if (axiosError.response.data.errors) {
            showToast({
              message: `${axiosError.response.data.errors[0].message}`,
              type: "error",
            });
          } else {
            showToast({
              message: `${axiosError.response.data.message}`,
              type: "error",
            });
            if (axiosError.response.data.code === "2201") router.back();
          }
        }
      }
    },
  });
}
