import { http } from "@/apis/http";
import { MemberAuthInfo } from "@/types/member";
import { FormatClubId } from "@/utils/extractPathElements";
import { useQuery } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
// 클럽 auth 조회
export const useMemberAuthQuery = () => {
  const clubId = FormatClubId();
  return useQuery<AxiosResponse<MemberAuthInfo>, AxiosError>({
    queryKey: ["myClubAuth", [clubId]],
    queryFn: async () => {
      const response = await http.get<AxiosResponse<MemberAuthInfo>>(
        `/clubs/${clubId}/member/my/auth`
      );
      return response;
    },
  });
};
