import { http } from "@/apis/http";
import { CommonNoPageRes } from "@/types";
import { MemberProfile } from "@/types/member";
import { FormatClubId } from "@/utils/extractPathElements";
import { useQuery } from "@tanstack/react-query";

// 클럽 멤버 개별 조회
export const useMemberQuery = (memberId: number) => {
  const clubId = FormatClubId();
  return useQuery<CommonNoPageRes<MemberProfile>>({
    queryKey: ["MemberProfile", [clubId, memberId]],
    queryFn: async () => {
      const response = await http.get<CommonNoPageRes<MemberProfile>>(
        `/clubs/${clubId}/member/profile?memberId=${memberId}`
      );
      return response;
    },
  });
};
