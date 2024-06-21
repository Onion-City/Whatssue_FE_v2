import { http } from "@/apis/http";
import { CommonNoPageRes } from "@/types";
import { AbsenceListProps, AbsenceMemberData } from "@/types/absence/types";
import { useQuery } from "@tanstack/react-query";

interface CombinedAbsenceData {
  memberAbsences: AbsenceMemberData;
  doneAbsences: AbsenceMemberData;
}

// 공결 신청 현황 조회 (/{clubId}/official_absence/list)
async function absencesMember ({
  clubId,
  clubMemberId
}: AbsenceListProps) {
  try {
    const res = await http.get<CommonNoPageRes<AbsenceMemberData>>(
      `/${clubId}/official_absence/list/${clubMemberId}`
    );
    console.log(res);
    return res.data;
  } catch (error) {
    console.error("Error creating board:", error);
    throw error;
  }
}

// 공결 신청 내역 조회 (/{clubId}/official_absence/done_list)
async function absencesDoneMember ({
  clubId,
  clubMemberId
}: AbsenceListProps) {
  try {
    const res = await http.get<CommonNoPageRes<AbsenceMemberData>>(
      `/${clubId}/official_absence/done_list/${clubMemberId}`
    );
    console.log(res);
    return res.data;
  } catch (error) {
    console.error("Error creating board:", error);
    throw error;
  }
}

// 두 함수를 모두 호출하여 결과를 반환하는 함수
async function fetchAbsences ({ clubId, clubMemberId }: AbsenceListProps): Promise<CommonNoPageRes<CombinedAbsenceData>> {
  const [memberAbsences, doneAbsences] = await Promise.all([
    absencesMember({ clubId, clubMemberId }),
    absencesDoneMember({ clubId, clubMemberId })
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
  clubMemberId
}: AbsenceListProps) => {
  return useQuery<CommonNoPageRes<CombinedAbsenceData>>({
    queryKey: ['absence', clubId, clubMemberId],
    queryFn: () => fetchAbsences({ clubId, clubMemberId }),
    staleTime: 1000,
  });
}
