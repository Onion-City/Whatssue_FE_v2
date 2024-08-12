import { http } from "@/apis/http";
import { MyCommentWrapperType, MyPostProps } from "@/types/info";
import { FormatClubId } from "@/utils/extractPathElements";
import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

// 내가 쓴 댓글
export const useMyCommentQuery = ({
  page,
  size,
  sort="",
}: MyPostProps) => {
  const clubId = FormatClubId();
  const myPostUrl = `/clubs/${clubId}/posts/my-comment-list?page=${page}&size=${size}`;
  return useQuery<AxiosResponse<MyCommentWrapperType>>({
    queryKey: ["postMyComment", { clubId, size, page, sort }],
    queryFn: async () => 
      await http.get<AxiosResponse<MyCommentWrapperType>>(myPostUrl)
  });
};

export default useMyCommentQuery;