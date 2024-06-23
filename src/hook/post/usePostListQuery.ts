import { http } from "@/apis/http";
import { CommonRes } from "@/types";
import { PostList } from "@/types/post";
import { useQuery } from "@tanstack/react-query";

interface props {
  clubId: number;
  keyword?: string;
  category: "NOTICE" | "FREE";
  startData?: string;
  endData?: string;
  page: number;
  size: number;
  sort?: string;
}
export const usePostListQuery = ({
  clubId,
  keyword = "",
  category,
  startData,
  endData,
  page,
  size,
  sort = "string",
}: props) => {
  const keywordUrl = `/clubs/${clubId}/posts?keyword=${keyword}&sortBy=createAt&category=${category}&page=${page}&size=${size}`;
  const datePullUrl = `/clubs/${clubId}/posts?keyword=${keyword}&startDate=${startData}&endData=${endData}&sortBy=createAt&page=${page}&size=${size}`;
  return useQuery<CommonRes<PostList>>({
    queryKey: ["postList", { clubId, category, size, page, sort }],
    queryFn: async () =>
      await http.get<CommonRes<PostList>>(keywordUrl, {
        headers: { accept: "*/*" },
      }),
  });
};

export default usePostListQuery;
