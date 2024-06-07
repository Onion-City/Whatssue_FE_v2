import { http } from "@/apis/http";
import { GetClubListResponse } from "@/types/club";
import { PageProps } from "@/types/pages";
import { useQuery } from "@tanstack/react-query";

export const useClubListQuery = ({ page, size }: PageProps) => {
  return useQuery<GetClubListResponse>({
    queryKey: [`clubList`, { page, size }],
    queryFn: () =>
      http.get<GetClubListResponse>(
        `/clubs?page=${page}&size=${size}&sort=string`,
        { headers: { accept: "*/*" } }
      ),
  });
};
