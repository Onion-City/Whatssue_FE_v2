import { Button } from "@/components/atoms/button";
import { HistoryHeader } from "@/components/organisms/Header";
import { Wrapper } from "@/components/organisms/Wrapper";
import { useScheduleMutation } from "@/hook/schedule/useScheduleMutation";
import { ScheduleData } from "@/types/schedule";
import moment from "moment";
import { useForm } from "react-hook-form";
import CalendarRegister from "./components/CalendarRegister";
import { CALENDAR_BTN } from "./constants/const";

const SetCalendarRegister = () => {
  // 일정 등록 입력 폼 관리
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm<ScheduleData>({
    mode: "onSubmit",
    defaultValues: {
      scheduleName: "",
      scheduleDate: moment(new Date()).format("YYYY-MM-DD"),
      scheduleTime: "",
      schedulePlace: "",
      scheduleContent: "",
    },
  });

  const { mutate } = useScheduleMutation();

  const onsubmit = (data: ScheduleData) => {
    console.log(data);
    mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onsubmit)}>
      <HistoryHeader title="일정 생성" />
      <Wrapper isHeader={true}>
        <CalendarRegister register={register} setValue={setValue} />
        <Button type="submit">{CALENDAR_BTN.register}</Button>
      </Wrapper>
    </form>
  );
};

export default SetCalendarRegister;
