import { http } from "@/apis/http";
import { commentKeys } from "@/constants/keys/postKey";
import { CommantDeleteProps } from "@/types/comment";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCommentDeleteMutation = ({
  clubId,
  postId,
  commentId,
}: CommantDeleteProps) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () =>
      http.post(`/clubs/${clubId}/comment/${commentId}/delete`),
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: [commentKeys.comment({ clubId, postId })],
      });
      console.log(data);
    },
  });
};
