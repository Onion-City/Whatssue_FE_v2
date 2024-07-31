import { http } from "@/apis/http";
import { CommonNoPageRes } from "@/types";
import { AbsenceContent, AbsenceListProps, AbsenceMemberData } from "@/types/absence/types";
import { useQuery } from "@tanstack/react-query";

// 과거 공결 신청 내역 조회 (/{clubId}/official-absence/done-list)
async function fetchDoneAbsences ({
  clubId,
  startDate,
  endDate,
  page,
  size,
  sort = "",
}: AbsenceListProps): Promise<CommonNoPageRes<AbsenceContent<AbsenceMemberData>>> {
  try {
    const res = await http.get<CommonNoPageRes<AbsenceContent<AbsenceMemberData>>>(
      `/${clubId}/official-absence/done-list?startDate=${startDate}&endDate=${endDate}&page=${page}&size=${size}`
    );
    return res;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export const useAbsencesDoneQuery = ({
  clubId,
  startDate,
  endDate,
  page,
  size,
}: AbsenceListProps) => {
  return useQuery<CommonNoPageRes<AbsenceContent<AbsenceMemberData>>>({
    queryKey: ['done-absence', {clubId, startDate, endDate, page}],
    queryFn: () => fetchDoneAbsences({ clubId, startDate, endDate, page, size }),
    staleTime: 1000,
  });
}
