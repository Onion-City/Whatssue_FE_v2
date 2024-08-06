import { http } from "@/apis/http";
import { CommonNoPageRes } from "@/types";
import { ClubJoin } from "@/types/info";
import { FormatClubId } from "@/utils/extractPathElements";
import { useQuery } from "@tanstack/react-query";

// 멤버 가입요청 목록 조회
export const useClubJoinQuery = () => {
  const clubId = FormatClubId();
  return useQuery<CommonNoPageRes<ClubJoin[]>>({
    queryKey: ["club-join", { clubId }],
    queryFn: async () =>
      await http.get<CommonNoPageRes<ClubJoin[]>>(
        `/clubs/${clubId}/join`,
        {
          headers: { accept: `*/*` },
        }
      ),
  });
};
