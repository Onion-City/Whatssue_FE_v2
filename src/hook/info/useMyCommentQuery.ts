import { http } from "@/apis/http";
import { CommonRes } from "@/types";
import { MyPostProps } from "@/types/info";
import { PostList } from "@/types/post";
import { FormatClubId } from "@/utils/extractPathElements";
import { useQuery } from "@tanstack/react-query";

// 내가 쓴 댓글
export const useMyCommentQuery = ({
  page,
  size,
  sort="",
}: MyPostProps) => {
  const clubId = FormatClubId();
  const myPostUrl = `/clubs/${clubId}/comment/my?page=${page}&size=${size}`;
  return useQuery<CommonRes<PostList>>({
    queryKey: ["postMyComment", { clubId, size, page, sort }],
    queryFn: async () => 
      await http.get<CommonRes<PostList>>(myPostUrl)
  });
};

export default useMyCommentQuery;