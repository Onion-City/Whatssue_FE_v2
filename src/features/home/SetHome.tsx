"use client";
import { HeaderInfo } from "@/components/molecules/headerInfo";
import { Nav } from "@/components/organisms/Nav";
import useSchedule from "@/hook/schedule/useSchedule";
import { RootState } from "@/redux/store";
import { FormatClubId } from "@/utils/extractPathElements";
import moment from "moment";
import { useRouter } from "next/navigation";
import { createContext } from "react";
import { useSelector } from "react-redux";
import HomeDateWrapper from "./components/HomeDateWrapper";
import HomeHeader from "./components/HomeHeader";
import HomeRegBtn from "./components/HomeRegBtn";

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
      {role === "MANAGER" && <HomeRegBtn />}
      <Nav />
    </ScheduleContext.Provider>
  );
};

export default SetHome;
