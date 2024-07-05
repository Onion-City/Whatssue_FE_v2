import { http } from "@/apis/http";
import { commentKeys } from "@/constants/keys/postKey";
import { CommonRes } from "@/types";
import { Comment } from "@/types/comment";
import { PostDetailProps } from "@/types/post";
import { useQuery } from "@tanstack/react-query";

interface commentListProps extends PostDetailProps {
  size: number;
  page: number;
}

export const useCommentsQuery = ({
  clubId,
  postId,
  size,
  page,
}: commentListProps) => {
  return useQuery<CommonRes<Comment>>({
    queryKey: [commentKeys.comment({ clubId, postId })],
    queryFn: async () =>
      await http.get<CommonRes<Comment>>(
        `/clubs/${clubId}/comment/${postId}?size=${size}&page=${page}`
      ),
  });
};

export default useCommentsQuery;
