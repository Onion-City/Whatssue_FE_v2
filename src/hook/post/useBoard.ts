import { ScheduleDate, ScheduleKeyword } from "@/types/schedule";
import { useEffect, useState } from "react";
import usePostListQuery from "./usePostListQuery";

export interface FetchBoardParams {
  keyword?: string;
  category: "NOTICE" | "FREE";
  startDate?: string;
  endDate?: string;
  page?: number;
  size?: number;
  sort?: string;
}
const useBoard = ({
  category,
  keyword,
  startDate,
  endDate,
  page = 0,
  size = 10,
}: FetchBoardParams) => {
  const [params, setParams] = useState<FetchBoardParams>({
    category: category,
    keyword: keyword,
    startDate: startDate,
    endDate: endDate,
    page: page,
    size: size,
  });
  const { data, isLoading, fetchNextPage, hasNextPage } =
    usePostListQuery(params);
  useEffect(() => {
    setParams((prev) => ({
      ...prev,
      keyword: keyword,
      page: 0, // 검색 시 페이지를 초기화
    }));
  }, [keyword]);
  // params 변경
  const refetchPeriodBoard = ({ startDate, endDate }: ScheduleDate) =>
    setParams((prev) => ({
      ...prev,
      startDate: startDate,
      endDate: endDate,
      page: 0,
    }));

  const refetchKeywordBoard = ({ keyword }: ScheduleKeyword) =>
    setParams((prev) => ({
      ...prev,
      keyword: keyword,
      page: 0,
    }));

  return {
    refetchPeriodBoard,
    refetchKeywordBoard,
    data,
    isLoading,
    fetchNextPage,
    hasNextPage,
  };
};

export default useBoard;
