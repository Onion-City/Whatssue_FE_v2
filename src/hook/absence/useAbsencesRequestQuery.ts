import { http } from "@/apis/http";
import { CommonNoPageRes } from "@/types";
import { AbsenceContent, AbsenceListProps, AbsenceMemberData } from "@/types/absence/types";
import { useQuery } from "@tanstack/react-query";

// 대기중인 공결 신청 조회 (/{clubId}/official-absence/request-list)
async function fetchRequestAbsences ({
  clubId,
  startDate,
  endDate,
  page,
  size,
  sort = "",
}: AbsenceListProps): Promise<CommonNoPageRes<AbsenceContent<AbsenceMemberData>>> {
  try {
    const res = await http.get<CommonNoPageRes<AbsenceContent<AbsenceMemberData>>>(
      `/${clubId}/official-absence/request-list?startDate=${startDate}&endDate=${endDate}&page=${page}&size=${size}`
    );
    return res;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export const useRequestAbsenceQuery = ({
  clubId,
  startDate,
  endDate,
  page,
  size,
}: AbsenceListProps) => {
  return useQuery<CommonNoPageRes<AbsenceContent<AbsenceMemberData>>>({
    queryKey: ['request-absence', {clubId, startDate, endDate, page}],
    queryFn: () => fetchRequestAbsences({ clubId, startDate, endDate, page, size }),
    staleTime: 1000,
  });
}
