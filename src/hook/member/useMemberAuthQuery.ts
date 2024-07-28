import { http } from "@/apis/http";
import { CommonRes } from "@/types";
import { MemberInfo } from "@/types/member";
import { FormatClubId } from "@/utils/extractPathElements";
import { useQuery } from "@tanstack/react-query";
// 클럽 auth 조회
export const useMemberAuthQuery = () => {
  const clubId = FormatClubId();
  return useQuery<CommonRes<MemberInfo>>({
    queryKey: ["clubAuth", [clubId]],
    queryFn: async () => {
      const response = await http.get<CommonRes<MemberInfo>>(
        `/clubs/${clubId}/member/my/auth`
      );
      return response;
    },
  });
};
