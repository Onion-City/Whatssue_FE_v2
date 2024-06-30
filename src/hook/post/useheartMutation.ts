import { http } from "@/apis/http";
import { postKeys } from "@/constants/keys/postKey";
import { PostDetailProps } from "@/types/post";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useHeartMutation = ({ clubId, postId }: PostDetailProps) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => http.post(`/clubs/${clubId}/posts/${postId}/like`),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [postKeys.detail({ postId, clubId })],
      });
    },
  });
};
export const useHeartCancleMutation = ({ clubId, postId }: PostDetailProps) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => http.delete(`/clubs/${clubId}/posts/${postId}/like`),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [postKeys.detail({ postId, clubId })],
      });
    },
  });
};
