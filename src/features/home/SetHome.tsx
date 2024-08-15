"use client";
import { Text } from "@/components/atoms/text";
import { HeaderInfo } from "@/components/molecules/headerInfo";
import { Nav } from "@/components/organisms/Nav";
import { useMemberAuthQuery } from "@/hook/member/useMemberAuthQuery";
import useSchedule from "@/hook/schedule/useSchedule";
import { setClub } from "@/redux/slices/club";
import { AppDispatch, RootState } from "@/redux/store";
import { COLORS } from "@/styles";
import { FormatClubId } from "@/utils/extractPathElements";
import moment from "moment";
import { useRouter } from "next/navigation";
import { createContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomeDateWrapper from "./components/HomeDateWrapper";
import HomeHeader from "./components/HomeHeader";

export const ScheduleContext = createContext<{
  value: Date;
  onChange: (newValue: Date) => void;
}>({
  value: new Date(),
  onChange: () => {},
});

const SetHome = () => {
  const router = useRouter();
  const { value, setValue, filteredData, isLoading, mark } = useSchedule({
    clubId: FormatClubId(),
    keyword: "",
    startDate: moment().startOf("month").format("YYYY-MM-DD"),
    endDate: moment().endOf("month").format("YYYY-MM-DD"),
    page: 0,
    size: 20,
  });
  const { data: memberInfo } = useMemberAuthQuery();
  const dispath = useDispatch<AppDispatch>();
  if (memberInfo?.data) {
    dispath(setClub(memberInfo.data));
  }

  const role = useSelector((state: RootState) => state.club.children.role);
  console.log(role);

  return (
    <ScheduleContext.Provider value={{ value, onChange: setValue }}>
      <HeaderInfo isClubInfo={true} isMyInfo={true} />
      <div
        style={{
          height: "100%",
          paddingBottom: "4.25rem",
          paddingTop: "4.25rem",
          backgroundColor: "#2B2B2B",
        }}
      >
        <HomeHeader mark={mark} />
        <HomeDateWrapper dateList={filteredData} isLoading={isLoading} />
      </div>
      {role === "MANAGER" && (
        <div
          style={{
            width: "90%",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "flex-end",
            margin: "0 auto",
          }}
        >
          <span
            style={{
              backgroundColor: COLORS.lightBackground,
              padding: "0.25rem 0.75rem",
              borderRadius: "50px",
              cursor: "pointer",
              border: `1px solid ${COLORS.whitegrey}`,
            }}
            onClick={() => router.push("/club/calendar/register")}
          >
            <Text color={COLORS.whitegrey} fontSize="0.875rem">
              일정 생성
            </Text>
          </span>
        </div>
      )}
      <Nav />
    </ScheduleContext.Provider>
  );
};

export default SetHome;
