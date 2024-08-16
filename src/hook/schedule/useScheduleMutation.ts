import { http } from "@/apis/http";
import { ScheduleData } from "@/types/schedule";
import { FormatClubId } from "@/utils/extractPathElements";
import useToast from "@/utils/useToast";
import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import { useRouter } from "next/navigation";

// 일정 등록 (/clubs/{clubId}/schedules)
export const useScheduleMutation = () => {
  const { showToast } = useToast();
  const router = useRouter();
  const clubId = FormatClubId();
  return useMutation<AxiosResponse<string>, Error, ScheduleData>({
    mutationFn: (data: ScheduleData) =>
      http.post(`/clubs/${clubId}/schedules`, data),
    onSuccess: (data) => {
      console.log(data);
      if (data.status === 200) {
        showToast({
          message: "일정이 등록되었습니다.",
          type: "success",
        });
        router.push("/");
      } else {
        showToast({
          message: data.data,
          type: "error",
        });
      }
    },
    onError: (error) => {
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
          }
        }
      }
    },
  });
};
