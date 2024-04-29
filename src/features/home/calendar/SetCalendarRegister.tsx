import { Button } from "@/components/atoms/button";
import { Wrapper } from "@/components/organisms/Wrapper";
import CalendarRegister from "./components/CalendarRegister";
import { CALENDAR_BTN } from "./constants/const";

const SetCalendarRegister = () => {
    return (
        <Wrapper isHeader={true}>
            <CalendarRegister />
            <Button>{CALENDAR_BTN.register}</Button>
        </Wrapper>
    )
};

export default SetCalendarRegister;