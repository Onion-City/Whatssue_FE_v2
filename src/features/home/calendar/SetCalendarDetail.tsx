import { HistoryHeader } from "@/components/organisms/Header";
import { Wrapper } from "@/components/organisms/Wrapper";
import { useScheduleDetailQuery } from "@/hook/schedule/useScheduleDetailQuery";
import { RootState } from "@/redux/store";
import { FormatClubId } from "@/utils/extractPathElements";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import CalendarDetailBtn from "./components/CalendarDetailBtn";
import CalendarDetailContent from "./components/CalendarDetailContent";
import CalendarDetailHeader from "./components/CalendarDetailHeader";

const SetCalendarDetail = () => {
  const path = usePathname();
  const clubId = FormatClubId();

  const { data: detailData, isLoading } = useScheduleDetailQuery({
    clubId: clubId,
    scheduleId: +path.split("/")[3],
  });

  const role = useSelector((state: RootState) => state.club.children.role);

  console.log(detailData?.data);
  return (
    <>
      {!detailData ? (
        <>loading...</>
      ) : (
        <Wrapper>
          <div>
            <HistoryHeader />
            <CalendarDetailHeader detailData={detailData?.data} />
            <CalendarDetailContent detailData={detailData?.data} />
          </div>
          {role !== "MANAGER" && (
            <CalendarDetailBtn
              // scheduleId={detailData?.data?.scheduleId}
              scheduleName={detailData?.data?.scheduleName}
            />
          )}
        </Wrapper>
      )}
    </>
  );
};

export default SetCalendarDetail;
