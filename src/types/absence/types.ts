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