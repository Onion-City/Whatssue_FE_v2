import { http } from "@/apis/http";
import { CommonRes } from "@/types";
import { Club } from "@/types/club";
import { PageProps } from "@/types/pages";
import { useQuery } from "@tanstack/react-query";

// 가입한 모임 조회
export const useClubListQuery = ({ page, size }: PageProps) => {
  return useQuery<CommonRes<Club>>({
    queryKey: [`clubList`, { page, size }],
    queryFn: () =>
      http.get<CommonRes<Club>>(
        `/clubs/my?page=${page}&size=${size}`,
        { headers: { accept: "*/*" } }
      ),
  });
};
