import { HistoryHeader } from "@/components/organisms/Header";
import { Wrapper } from "@/components/organisms/Wrapper";
import CalendarDetailBtn from "./components/CalendarDetailBtn";
import CalendarDetailContent from "./components/CalendarDetailContent";
import CalendarDetailHeader from "./components/CalendarDetailHeader";

const SetCalendarDetail = () => {
    return (
        <Wrapper>
            <div>
                <HistoryHeader />
                <CalendarDetailHeader />
                <CalendarDetailContent />
            </div>
            <CalendarDetailBtn />
        </Wrapper>
    )
};

export default SetCalendarDetail;