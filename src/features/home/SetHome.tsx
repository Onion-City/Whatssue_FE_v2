"use client";
import { ClubHeader } from "@/components/organisms/Header/ClubHeader";
import { Nav } from "@/components/organisms/Nav";
import { useMemberAuthQuery } from "@/hook/member/useMemberAuthQuery";
import useSchedule from "@/hook/schedule/useSchedule";
import { setClub } from "@/redux/slices/club";
import { AppDispatch } from "@/redux/store";
import { FormatClubId } from "@/utils/extractPathElements";
import moment from "moment";
import { createContext } from "react";
import { useDispatch } from "react-redux";
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

  return (
    <ScheduleContext.Provider value={{ value, onChange: setValue }}>
      <div style={{ height: "100%", paddingBottom: "4.25rem" }}>
        <ClubHeader color={true} />
        <HomeHeader mark={mark} />
        <HomeDateWrapper dateList={filteredData} isLoading={isLoading} />
      </div>
      <Nav />
    </ScheduleContext.Provider>
  );
};

export default SetHome;
