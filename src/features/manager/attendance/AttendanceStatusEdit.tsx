import { HistoryHeader } from "@/components/organisms/Header";
import AttendanceStatusListEdit from "./components/AttendanceStatusListEdit";

const AttendanceStatusEdit: React.FC = () => {
  return (
    <>
      <HistoryHeader />
      <AttendanceStatusListEdit />
    </>
  );
};

export default AttendanceStatusEdit;
