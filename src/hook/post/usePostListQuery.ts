"use client";
import { http } from "@/apis/http";
import { CommonPage, CommonRes } from "@/types";
import { PostList } from "@/types/post";
import { FormatClubId } from "@/utils/extractPathElements";
import { useCustomInfiniteQuery } from "@/utils/useCustomInfiniteQuery";

interface props {
  keyword?: string;
  category: "NOTICE" | "FREE";
  startData?: string;
  endData?: string;
  size?: number;
  sort?: string;
}

export const usePostListQuery = ({
  keyword = "",
  category,
  startData,
  endData,
  size = 10,
  sort = "string",
}: props) => {
  const clubId = FormatClubId();
  const getPostList = async (page: number): Promise<CommonPage<PostList>> => {
    // 쿼리 문자열 생성
    const query = new URLSearchParams({
      keyword: keyword || "", // 비어 있을 경우 빈 문자열로 설정
      sortBy: sort,
      category: category,
      page: page.toString(),
      size: size.toString(),
    });
    if (startData && endData) {
      query.append("startDate", startData);
      query.append("endDate", endData);
    }

    const response = await http.get<CommonRes<PostList>>(
      `/clubs/${clubId}/posts?${query.toString()}`
    );
    return response.data;
  };
  return useCustomInfiniteQuery<PostList>({
    queryKey: ["postList", { clubId, category, keyword, size, sort }],
    customQueryFn: getPostList,
  });
};

export default usePostListQuery;
