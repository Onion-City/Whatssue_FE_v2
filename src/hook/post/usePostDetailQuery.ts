import { http } from "@/apis/http";
import { postKeys } from "@/constants/keys/postKey";
import { CommonNoPageRes } from "@/types";
import { PostDetailProps, PostList } from "@/types/post";
import { useQuery } from "@tanstack/react-query";

export const usePostDetailQuery = ({ clubId, postId }: PostDetailProps) => {
  return useQuery<CommonNoPageRes<PostList>>({
    queryKey: [postKeys.detail({ clubId, postId })],
    queryFn: async () =>
      await http.get<CommonNoPageRes<PostList>>(`clubs/${clubId}/posts/${postId}`),
  });
};

export default usePostDetailQuery;
