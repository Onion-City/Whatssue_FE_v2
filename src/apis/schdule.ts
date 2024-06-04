import { ScheduleData } from "@/types/schedule";
import { http } from "./http";

export const scheduleRegister = (
  data: ScheduleData
) => {
  try {
    const response = http.patch("/itemgroup.update", data);
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};