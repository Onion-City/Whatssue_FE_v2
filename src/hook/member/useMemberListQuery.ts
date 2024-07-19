import { http } from "@/apis/http";
import { CommonRes } from "@/types";
import { MemberInfo, MemeberPages } from "@/types/member";
import { FormatClubId } from "@/utils/extractPathElements";
import { useQuery } from "@tanstack/react-query";

// 클럽 멤버 리스트 조회
export const useMemberListQuery = ({ page, size }: MemeberPages) => {
  const clubId = FormatClubId();
  return useQuery<CommonRes<MemberInfo>>({
    queryKey: ["clubMemberList", [clubId]],
    queryFn: async () => {
      const response = await http.get<CommonRes<MemberInfo>>(
        `/clubs/${clubId}/member/profile/list?size=${size}&page=${page}`
      );
      return response;
    },
  });
};
