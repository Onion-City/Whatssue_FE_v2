import { http } from "@/apis/http";
import { commentKeys } from "@/constants/keys/postKey";
import { CommonPage, CommonRes } from "@/types";
import { Comment } from "@/types/comment";
import { PostDetailProps } from "@/types/post";
import { useCustomInfiniteQuery } from "@/utils/useCustomInfiniteQuery";

export const useCommentsQuery = ({ clubId, postId }: PostDetailProps) => {
  const size = 10;

  const getCommentList = async (page: number): Promise<CommonPage<Comment>> => {
    const response = await http.get<CommonRes<Comment>>(
      `/clubs/${clubId}/comment/${postId}?size=${size}&page=${page}`
    );
    const data = await response;
    return data.data;
  };
  return useCustomInfiniteQuery<Comment>({
    queryKey: [commentKeys.comment({ clubId, postId })],
    customQueryFn: getCommentList,
  });
};
export default useCommentsQuery;