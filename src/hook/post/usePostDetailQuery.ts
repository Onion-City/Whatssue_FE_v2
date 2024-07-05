import { http } from "@/apis/http";
import { postKeys } from "@/constants/keys/postKey";
import { CommonNoPageRes } from "@/types";
import { PostList } from "@/types/post";
import { FormatClubId, FormatPostId } from "@/utils/extractPathElements";
import { useQuery } from "@tanstack/react-query";

export const usePostDetailQuery = () => {
  const clubId = FormatClubId();
  const postId = FormatPostId();
  return useQuery<CommonNoPageRes<PostList>>({
    queryKey: [postKeys.detail({ clubId, postId })],
    queryFn: async () =>
      await http.get<CommonNoPageRes<PostList>>(
        `/clubs/${clubId}/posts/${postId}`
      ),
  });
};

export default usePostDetailQuery;
