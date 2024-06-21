// 공결 신청

export interface AbsenceReqProps {
  clubId?: number;
  scheduleId?: number;
}

export interface AbsenceReqData {
  clubMemberId: number;
  scheduleId: number;
  officialAbsenceContent: string;
}

export interface AbsenceReasonValues {
  absenceReason: string;
}

// 공결 리스트 조회

export interface AbsenceListProps {
  clubId?: number;
  clubMemberId?: number;
}

export interface AbsenceMemberData {
  id: number,
  clubMemberId: number,
  scheduleId: number,
  officialAbsenceContent: string,
  officialAbsenceRequestType: "WAITING" | "ACCEPTED" | "REJECTED",

}