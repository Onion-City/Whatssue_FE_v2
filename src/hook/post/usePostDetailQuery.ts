import { http } from "@/apis/http";
import { CommonRes } from "@/types";
import { PostDetailProps } from "@/types/post";
import { useQuery } from "@tanstack/react-query";

export const usePostDetailQuery = ({ clubId, postId }: PostDetailProps) => {
  return useQuery<CommonRes<any>>({
    queryKey: ["postDetail", clubId, postId],
    queryFn: async () => {
      const response = await http.get<CommonRes<any>>(
        `clubs/4/posts/9`
      );
      return response;
    },
    staleTime: 1000,
  });
};

export default usePostDetailQuery;
