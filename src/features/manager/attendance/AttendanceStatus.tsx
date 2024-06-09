import { HistoryHeader } from "@/components/organisms/Header";
import AttendanceStatusList from "./components/AttendanceStatusList";

const AttendanceStatus: React.FC = () => {
  return (
    <>
      <HistoryHeader />
      <AttendanceStatusList />
    </>
  );
};

export default AttendanceStatus;
