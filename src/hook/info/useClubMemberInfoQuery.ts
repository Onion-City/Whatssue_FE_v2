import { http } from "@/apis/http";
import { CommonNoPageRes } from "@/types";
import { ClubMember } from "@/types/info";
import { useQuery } from "@tanstack/react-query";

export const useClubMemberInfoQuery = ({
  clubId,
}: {
  clubId: number;
}) => {
  const myPostUrl = `/clubs/${clubId}/member/info`;
  return useQuery<CommonNoPageRes<ClubMember>>({
    queryKey: ["club-member-info", { clubId }],
    queryFn: async () => 
      await http.get<CommonNoPageRes<ClubMember>>(myPostUrl)
  });
};

export default useClubMemberInfoQuery;