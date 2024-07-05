import { http } from "@/apis/http";
import { CommonRes } from "@/types";
import { PostList } from "@/types/post";
import { formatClubId } from "@/utils/extractPathElements";
import { useQuery } from "@tanstack/react-query";

interface props {
  keyword?: string;
  category: "NOTICE" | "FREE";
  startData?: string;
  endData?: string;
  page: number;
  size: number;
  sort?: string;
}
export const usePostListQuery = ({
  keyword = "",
  category,
  startData,
  endData,
  page,
  size,
  sort = "string",
}: props) => {
  const clubId = formatClubId();
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
