import { AbsentBox } from "@/features/info/absent/components/AbsentBox"
import { AbsenceMemberData } from "@/types/absence/types"

export default function ManageAbsentCurrentList() {
  const absentDummy: AbsenceMemberData = 
  {
    id: 0,
    clubMemberId: 123,
    scheduleId: 456,
    scheduleDate: "2024-01-01",
    scheduleName: "와이어 프레임 작성 회의",
    officialAbsenceContent: "test공결사유",
    officialAbsenceRequestType: "WAITING",
    createAt: "2024-01-01",
    updateAt: "2024-01-01"
  }

  return (
    <div>
      <AbsentBox 
        data={absentDummy}
      />
    </div>
  )
}
