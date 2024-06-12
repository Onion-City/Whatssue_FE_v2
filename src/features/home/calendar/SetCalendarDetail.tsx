import { HistoryHeader } from "@/components/organisms/Header";
import { Wrapper } from "@/components/organisms/Wrapper";
import { useScheduleDetailQuery } from "@/hook/schedule/useScheduleDetailQuery";
import { usePathname } from "next/navigation";
import CalendarDetailBtn from "./components/CalendarDetailBtn";
import CalendarDetailContent from "./components/CalendarDetailContent";
import CalendarDetailHeader from "./components/CalendarDetailHeader";

const SetCalendarDetail = () => {
    const path = usePathname();

    const { data: detailData, isLoading } = useScheduleDetailQuery({
        clubId: 1,
        scheduleId: +path.split("/")[3],
    })

    console.log(detailData?.data);
    return (
        <>
        {!detailData ? (
            <>loading...</>
        ) : (
            <Wrapper>
                <div>
                    <HistoryHeader />
                    <CalendarDetailHeader 
                        detailData={detailData?.data}
                    />
                    <CalendarDetailContent 
                        detailData={detailData?.data}
                    />
                </div>
                <CalendarDetailBtn 
                    // scheduleId={detailData?.data?.scheduleId}
                    scheduleName={detailData?.data?.scheduleName}
                />
            </Wrapper>
        )}
        </>
    )
};

export default SetCalendarDetail;