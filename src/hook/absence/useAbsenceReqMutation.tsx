import { http } from "@/apis/http";
import { AbsenceReqData, AbsenceReqProps } from "@/types/absence/types";
import useToast from "@/utils/useToast";
import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

// 공결 신청 (/{clubId}/official_absence/request/{scheduleId})
export const useAbsenceReqMutation = ({
  clubId,
  scheduleId,
}: AbsenceReqProps) => {
  const { showToast } = useToast();

  return useMutation<AxiosResponse<string>, Error, AbsenceReqData>({
    mutationFn: (data: AbsenceReqData) => {
      const body = data.officialAbsenceContent;
      return http.post(
        `/${clubId}/official-absence/request/${scheduleId}`,
        body
      );
    },
    onSuccess: (data) => {
      console.log(data);
      if (data.status === 200) {
        showToast({
          message: "공결 신청되었습니다.",
          type: "success",
        });
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
          if (axiosError.response.data.code === "6200") {
            showToast({
              message: "이미 공결 신청한 일정입니다.",
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
