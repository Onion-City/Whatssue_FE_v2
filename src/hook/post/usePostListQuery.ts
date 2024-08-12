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
    const response = await http.get<CommonRes<PostList>>(
      `/clubs/${clubId}/posts?keyword=${keyword}&sortBy=createAt&category=${category}&page=${page}&size=${size}`
    );
    const data = await response;
    return data.data;
  };
  return useCustomInfiniteQuery<PostList>({
    queryKey: ["postList", { clubId, category, size, sort }],
    customQueryFn: getPostList,
  });
};


export default usePostListQuery;
