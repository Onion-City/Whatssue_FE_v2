import { CommonPage } from "@/types";
import { useInfiniteQuery } from "@tanstack/react-query";

export function useCustomInfiniteQuery<T>({
  queryKey,
  customQueryFn,
}: {
  queryKey: any;
  customQueryFn: (pageParam: number) => Promise<CommonPage<T>>;
}) {
  return useInfiniteQuery<CommonPage<T>, Error>({
    queryKey: queryKey,
    queryFn: async ({ pageParam = 0 }) => customQueryFn(pageParam as number),
    getNextPageParam: (lastPage) => {
      return lastPage.last ? undefined : lastPage.pageable.pageNumber + 1;
    },
    retry: 3,
    refetchOnWindowFocus: false,
    initialPageParam: undefined,
  });
}
