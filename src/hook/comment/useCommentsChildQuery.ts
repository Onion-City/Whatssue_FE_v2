import { http } from "@/apis/http";
import { commentKeys } from "@/constants/keys/postKey";
import { CommonRes } from "@/types";
import { Comment, CommentChildProps } from "@/types/comment";
import { useQuery } from "@tanstack/react-query";

export const useCommentsChildQuery = ({
  clubId,
  parentId,
  postId,
  size,
  page,
}: CommentChildProps) => {
  return useQuery<CommonRes<Comment>>({
    queryKey: [commentKeys.commentChild({ clubId, postId, parentId })],
    queryFn: async () =>
      await http.get<CommonRes<Comment>>(
        `/clubs/${clubId}/comment/child/${parentId}?size=${size}&page=${page}`
      ),
  });
};

export default useCommentsChildQuery;
