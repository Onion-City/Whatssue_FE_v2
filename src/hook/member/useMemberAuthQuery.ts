import { http } from "@/apis/http";
import { MemberAuthInfo } from "@/types/member";
import { FormatClubId } from "@/utils/extractPathElements";
import useToast from "@/utils/useToast";
import { useQuery } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import { useRouter } from "next/navigation";
// 클럽 auth 조회
export const useMemberAuthQuery = () => {
  const { showToast } = useToast();
  const router = useRouter();
  const clubId = FormatClubId();
  return useQuery<AxiosResponse<MemberAuthInfo>, AxiosError>({
    queryKey: ["myClubAuth", [clubId]],
    queryFn: async () => {
      try {
        const response = await http.get<AxiosResponse<MemberAuthInfo>>(
          `/clubs/${clubId}/member/my/auth`
        );
        return response;
      } catch (error) {
        const axiosError = error as AxiosError<any>;
        if (axiosError.response?.data.code === "2200") {
          router.push("/user/onboarding?policy=REAL_NAME");
          // showToast({
          //   message: `${axiosError.response.data.message}`,
          //   type: "error",
          // });
        } else {
          showToast({
            message: "에러가 발생했습니다.",
            type: "error",
          });
          router.push("/");
        }
        throw error;
      }
    },
  });
};
