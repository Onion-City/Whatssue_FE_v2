import { http } from "@/apis/http";
import { CommonNoPageRes } from "@/types";
import { AbsenceContent, AbsenceListProps, AbsenceMemberData } from "@/types/absence/types";
import { useQuery } from "@tanstack/react-query";

// 내 공결 신청 현황 조회 (/{clubId}/official_absence/my-list)
async function fetchMyAbsences ({
  clubId,
  startDate,
  endDate,
  page,
  size,
  sort = "",
}: AbsenceListProps): Promise<CommonNoPageRes<AbsenceContent<AbsenceMemberData>>> {
  try {
    const res = await http.get<CommonNoPageRes<AbsenceContent<AbsenceMemberData>>>(
      `/${clubId}/official-absence/my-list?startDate=${startDate}&endDate=${endDate}&page=${page}&size=${size}`
    );
    console.log(res);
    return res;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export const useMyAbsenceQuery = ({
  clubId,
  startDate,
  endDate,
  page,
  size,
}: AbsenceListProps) => {
  return useQuery<CommonNoPageRes<AbsenceContent<AbsenceMemberData>>>({
    queryKey: ['my-absence', {clubId, startDate, endDate, page}],
    queryFn: () => fetchMyAbsences({ clubId, startDate, endDate, page, size }),
    staleTime: 1000,
  });
}
