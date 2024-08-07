import { Button } from "@/components/atoms/button";
import { Text } from "@/components/atoms/text";
import { InfoIcon } from "@/components/molecules/infoIcon";
import { HistoryHeader, MemberHeader } from "@/components/organisms/Header";
import { ICONS, IMAGES } from "@/constants/images";
import { AttendanceHeader } from "@/features/info/attendance/components/AttendanceHeader";
import useMemberAttendance from "@/hook/attendance/member/useMemberAttendance";
import { useMemberAuthQuery } from "@/hook/member/useMemberAuthQuery";
import { useMemberQuery } from "@/hook/member/useMemberQuery";
import { FormatClubId } from "@/utils/extractPathElements";
import { formatPhoneNumber } from "@/utils/phone";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import "./MemberDetail.css";

const MemberDetail = () => {
  const router = useRouter();
  const pathName = usePathname();
  const { data, isLoading } = useMemberQuery(
    parseInt(pathName.split("/")[3], 10)
  );
  const { refetchPeriodSchedule, attendances } = useMemberAttendance({
    clubId: FormatClubId(),
    startDate: "2000-01-01",
    endDate: "2030-01-01",
    attendanceType: "TOTAL",
    memberId: parseInt(pathName.split("/")[3], 10),
  });
  const filteredData = (attendanceType: string): number => {
    return (
      attendances?.data?.attendanceList?.content?.filter(
        (el) => el.attendanceType === attendanceType
      ).length || 0
    );
  };
  const memberInfo = useMemberAuthQuery().data?.data;
  const checkManager = memberInfo?.role === "MANAGER";
  const editAuthority = memberInfo?.memberId === data?.data.memberId;

  const handleModify = () => {
    router.push(`${pathName}/edit`);
  };

  const handleAttendance = () => {
    router.push(`${pathName}/attendance`);
  };
  if (isLoading || data === undefined) {
    return <div>loading</div>;
  }
  return (
    <>
      {checkManager && !editAuthority ? (
        <MemberHeader role={data.data.role} memberId={data.data.memberId} />
      ) : (
        <>
          <HistoryHeader />
        </>
      )}
      <div className="member__detail__wrapper">
        <div className="member__detail__profile__wrapper">
          <Image
            src={data?.data.profileImage || ICONS.memberProfileNone}
            alt="profile"
            className="member__detail__profile"
            height={100}
            width={100}
          />
          <div className="member__detail__profile_inner">
            <div className="member__detail__profile_inner_name">
              <Text color="#fff" fontSize="1.5625rem" fontWeight="700">
                {data?.data.memberName}
              </Text>
              <Image src={ICONS.changeProfile} alt="change" />
            </div>
            <Text color="#fff" fontSize="0.9375rem" fontWeight="600">
              {data?.data.memberIntro}&nbsp;
            </Text>
          </div>
        </div>
        <InfoIcon
          type="phone"
          content={formatPhoneNumber(data?.data.userPhone)}
          imgWidth="0.9375rem"
          imgHeight="1.25rem"
        />
        <InfoIcon
          type="email"
          content={data?.data.userEmail || ""}
          imgWidth="1.1875rem"
          imgHeight="0.875rem"
        />

        {editAuthority && (
          <div className="member__detail__bottom" onClick={handleModify}>
            <Button
              fontSize="0.9375rem"
              fontWeight="600"
              width="90vw"
              height="3.125rem;"
            >
              프로필 편집하기
            </Button>
          </div>
        )}
        {checkManager && !editAuthority && (
          <div style={{ position: "relative" }}>
            <AttendanceHeader
              clubMemberName={data.data?.memberName}
              attend={filteredData("출석")}
              absent={filteredData("공결")}
              miss={filteredData("결석")}
              refetchPeriodSchedule={refetchPeriodSchedule}
            />
            <div
              className="member__detail__bottom__push__detail__page"
              onClick={handleAttendance}
            >
              <Text color="#9D9D9D" fontSize="0.6875rem" fontWeight="500">
                상세보기
              </Text>
              <Image src={IMAGES.back} alt="push" />
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default MemberDetail;
