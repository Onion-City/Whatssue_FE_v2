import { http } from "@/apis/http";
import { CommonNoPageRes } from "@/types";
import { MemberAuthInfo } from "@/types/member";
import { FormatClubId } from "@/utils/extractPathElements";
import { useQuery } from "@tanstack/react-query";
// 클럽 auth 조회
export const useMemberAuthQuery = () => {
  const clubId = FormatClubId();
  return useQuery<CommonNoPageRes<MemberAuthInfo>>({
    queryKey: ["myClubAuth", [clubId]],
    queryFn: async () => {
      const response = await http.get<CommonNoPageRes<MemberAuthInfo>>(
        `/clubs/${clubId}/member/my/auth`
      );
      return response;
    },
  });
};
