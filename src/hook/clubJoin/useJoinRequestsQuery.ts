import { http } from "@/apis/http";
import { CommonRes } from "@/types";
import { PageProps } from "@/types/pages";
import { useQuery } from "@tanstack/react-query";

export const useJoinRequestsQuery = ({ page, size }: PageProps) => {
  return useQuery<CommonRes<any>>({
    queryKey: ["JoinRequest", { page, size }],
    queryFn: () =>
      http.get<CommonRes<any>>(`/join/requests?page=${page}&size=${size}`, {
        headers: { accept: `*/*` },
      }),
  });
};
