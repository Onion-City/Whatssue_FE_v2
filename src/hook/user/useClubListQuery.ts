import { http } from "@/apis/http";
import { CommonRes } from "@/types";
import { Club } from "@/types/club";
import { PageProps } from "@/types/pages";
import { useQuery } from "@tanstack/react-query";

export const useClubListQuery = ({ page, size }: PageProps) => {
  return useQuery<CommonRes<Club>>({
    queryKey: [`clubList`, { page, size }],
    queryFn: () =>
      http.get<CommonRes<Club>>(
        `/clubs?page=${page}&size=${size}`,
        { headers: { accept: "*/*" } }
      ),
  });
};
