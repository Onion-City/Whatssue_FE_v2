import { http } from "@/apis/http";
import { postKeys } from "@/constants/keys/postKey";
import { CommentData } from "@/types/comment";
import { PostDetailProps } from "@/types/post";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCommentChangeMutation = ({
  clubId,
  postId,
}: PostDetailProps) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: CommentData) =>
      http.post(`/clubs/${clubId}/comment/updata`, data),
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: [postKeys.comment({ clubId, postId })],
      });
      console.log(data);
    },
  });
};
