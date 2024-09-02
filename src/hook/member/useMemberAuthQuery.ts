import { http } from "@/apis/http";
import { ClubInfoContent } from "@/types/club";
import { MemberAuthInfo } from "@/types/member";
import { FormatClubId } from "@/utils/extractPathElements";
import useToast from "@/utils/useToast";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
// 클럽 auth 조회
export const useMemberAuthQuery = () => {
  const { showToast } = useToast();
  const router = useRouter();
  const queryClient = useQueryClient();
  const clubId = FormatClubId();

  const [errorCode, setErrorCode] = useState<string | null>(null);

  const { data, error } = useQuery<AxiosResponse<MemberAuthInfo>, AxiosError>({
    queryKey: ["myClubAuth", clubId],
    queryFn: async () => {
      try {
        const response = await http.get<AxiosResponse<MemberAuthInfo>>(
          `/clubs/${clubId}/member/my/auth`
        );
        return response;
      } catch (error) {
        const axiosError = error as AxiosError<any>;
        setErrorCode(axiosError.response?.data.code);
        throw error;
      }
    },
  });

  useEffect(() => {
    if (errorCode === "2200") {
      // 모임 초기 프로필 미설정 시
      const fetchClubInfo = async () => {
        try {
          const clubData = await queryClient.fetchQuery({
            queryKey: ["clubInfo", clubId],
            queryFn: async () => {
              const response = await http.get<AxiosResponse<ClubInfoContent>>(
                `/clubs/${clubId}/info`
              );
              return response.data;
            },
          });

          router.push(`/user/onboarding?policy=${clubData.namePolicy}`); // Assuming namePolicy is a property of the returned data
        } catch (error) {
          console.error("Error fetching club info:", error);
        }
      };

      fetchClubInfo();

      // Optionally, show toast or handle UI updates here
    }
  }, [errorCode]);

  return { data, error };
};
