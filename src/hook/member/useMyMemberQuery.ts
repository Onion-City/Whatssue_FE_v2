import { http } from "@/apis/http";
import { CommonNoPageRes } from "@/types";
import { MyProfile } from "@/types/member";
import { FormatClubId } from "@/utils/extractPathElements";
import { useQuery } from "@tanstack/react-query";

// 클럽 멤버 My 조회
export const useMyMemberQuery = () => {
  const clubId = FormatClubId();
  return useQuery<CommonNoPageRes<MyProfile>>({
    queryKey: ["MyProfile", clubId],
    queryFn: async () => {
      const response = await http.get<CommonNoPageRes<MyProfile>>(
        `/clubs/${clubId}/member/my/profile`
      );
      return response;
    },
  });
};
