import { http } from "@/apis/http";
import { PostDetailProps } from "@/types/post";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export const usePostDeleteMutation = ({ clubId, postId }: PostDetailProps) => {
  const queryClient = useQueryClient();
  const router = useRouter();
  return useMutation({
    mutationFn: () => http.delete(`/clubs/${clubId}/posts/${postId}/delete`),
    onSuccess: () => {
      router.back();
      queryClient.invalidateQueries({
        queryKey: ["postList"],
      });
    },
  });
};
