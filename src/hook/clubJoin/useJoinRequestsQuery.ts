import { http } from "@/apis/http";
import { CommonRes } from "@/types";
import { PageProps } from "@/types/pages";
import { useQuery } from "@tanstack/react-query";

// 모임가입 신청내역 조회
export const useJoinRequestsQuery = ({ page, size }: PageProps) => {
  return useQuery<CommonRes<any>>({
    queryKey: ["JoinRequest", { page, size }],
    queryFn: () =>
      http.get<CommonRes<any>>(`/clubs/join?page=${page}&size=${size}`, {
        headers: { accept: `*/*` },
      }),
  });
};
