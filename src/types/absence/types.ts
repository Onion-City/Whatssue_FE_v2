// 공결 신청

export enum Absence {
  WAITING = "미승인",
  ACCEPTED = "승인완료",
  REJECTED = "승인거절",
}

export interface AbsenceReqProps {
  clubId?: number;
  scheduleId?: number;
}

export interface AbsenceReqData {
  officialAbsenceContent: string;
}

export interface AbsenceReasonValues {
  absenceReason: string;
}

// 공결 리스트 조회

export interface AbsenceListProps {
  clubId?: number;
  startDate?: string;
  endDate?: string;
  page?: number;
  size?: number;
  sort?: string;
}

export interface AbsenceMemberData {
  id: number;
  clubMemberId: number;
  clubMemberName: string;
  scheduleId: number;
  scheduleDate: string;
  scheduleName: string;
  officialAbsenceId: number;
  officialAbsenceContent: string;
  officialAbsenceRequestType: "WAITING" | "ACCEPTED" | "REJECTED";
  createdAt?: string;
  updatedAt?: string;
}

export interface AbsenceContent<T> {
  content: T[];
}

export interface AbsenceMyResultsParams {
  clubId: number;
  startDate?: string;
  endDate?: string;
  page?: number;
  size?: number;
}

// 공결 수락

export interface AbsenceAcceptParams {
  clubId: number;
}
