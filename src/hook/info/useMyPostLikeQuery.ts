import { http } from "@/apis/http";
import { CommonRes } from "@/types";
import { MyPostProps } from "@/types/info";
import { PostList } from "@/types/post";
import { useQuery } from "@tanstack/react-query";

export const useMyPostLikeQuery = ({
  clubId,
  userId,
  category,
  page,
  size,
  sort="",
}: MyPostProps) => {
  const myPostUrl = `/clubs/${clubId}/posts/my_like_posts?userId=${userId}&postCategory=${category}&page=${page}&size=${size}&sort=${sort}`;
  return useQuery<CommonRes<PostList>>({
    queryKey: ["postMyLikePost", { clubId, category, size, page, sort }],
    queryFn: async () => 
      await http.get<CommonRes<PostList>>(myPostUrl)
  });
};

export default useMyPostLikeQuery;