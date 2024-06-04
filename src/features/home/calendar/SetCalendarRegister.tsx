import { Button } from "@/components/atoms/button";
import { Wrapper } from "@/components/organisms/Wrapper";
import { useScheduleMutation } from "@/hook/schedule/useScheduleMutation";
import { ScheduleData } from "@/types/schedule";
import { usePathname } from "next/navigation";
import { useForm } from "react-hook-form";
import CalendarRegister from "./components/CalendarRegister";
import { CALENDAR_BTN } from "./constants/const";

const SetCalendarRegister = () => {
    const path = usePathname();
    
    // 일정 등록 입력 폼 관리
    const {
        register,
        formState: {errors},
        handleSubmit,
        setValue,
    } = useForm<ScheduleData>({
        mode: "onSubmit",
        defaultValues: {
            scheduleName: "",
            scheduleDate: "",
            scheduleTime: "",
            schedulePlace: "",
            scheduleContent: "",
        },
    });

    const { mutate } = useScheduleMutation({
        clubId: +path.split("/")[1],
        userId: 6
    });

    const onsubmit = (data: ScheduleData) => {
        console.log(data);
        mutate(data);
    };

    return (
        <form onSubmit={handleSubmit(onsubmit)}>
            <Wrapper isHeader={true}>
                <CalendarRegister 
                    register={register}
                    setValue={setValue}
                />
                <Button 
                    type="submit"
                >{CALENDAR_BTN.register}</Button>
            </Wrapper>
        </form>
    )
};

export default SetCalendarRegister;