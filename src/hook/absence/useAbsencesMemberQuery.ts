import { http } from "@/apis/http";
import { CommonNoPageRes } from "@/types";
import { AbsenceContent, AbsenceListProps, AbsenceMemberData } from "@/types/absence/types";
import { useQuery } from "@tanstack/react-query";

interface CombinedAbsenceData {
  memberAbsences: AbsenceContent<AbsenceMemberData>;
  doneAbsences: AbsenceContent<AbsenceMemberData>;
}

// 공결 신청 전체 조회 (/{clubId}/official_absence/list)
async function absencesMember ({
  clubId,
  page,
  size,
  sort = "string",
}: AbsenceListProps) {
  try {
    const res = await http.get<CommonNoPageRes<AbsenceContent<AbsenceMemberData>>>(
      `/${clubId}/official-absence/list?page=${page}&size=${size}`
    );
    console.log(res);
    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// 공결 신청 내역 조회 (/{clubId}/official_absence/done_list)
async function absencesDoneMember ({
  clubId,
  page,
  size,
  sort = "string",
}: AbsenceListProps) {
  try {
    const res = await http.get<CommonNoPageRes<AbsenceContent<AbsenceMemberData>>>(
      `/${clubId}/official-absence/done-list?page=${page}&size=${size}`
    );
    console.log(res);
    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function fetchAbsences ({ clubId, page, size }: AbsenceListProps): Promise<CommonNoPageRes<CombinedAbsenceData>> {
  const [memberAbsences, doneAbsences] = await Promise.all([
    absencesMember({ clubId, page, size }),
    absencesDoneMember({ clubId, page, size })
  ]);

  return {
    data: {
      memberAbsences,
      doneAbsences
    }
  };
}

export const useAbsenceMemberQuery = ({
  clubId,
  page,
  size,
  sort = "string",
}: AbsenceListProps) => {
  return useQuery<CommonNoPageRes<CombinedAbsenceData>>({
    queryKey: ['absence', clubId],
    queryFn: () => fetchAbsences({ clubId, page, size }),
    staleTime: 1000,
  });
}
