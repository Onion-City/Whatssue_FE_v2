"use client";
import { ATTENDANCE_MODAL, CURRENT_ATTENDANCE_TITLE } from "../constants/const";
import { Text } from "@/components/atoms/text";
import "./Attendance.css";
import AttendanceItem from "@/components/molecules/attendanceItem/AttendanceItem";
import { useAttendanceListQuery } from "@/hook/attendance/useAttendanceListQuery";
import { useState, useEffect } from "react";
import { AttendanceListItem } from "@/types/attendance/types";
import { Modal } from "@/components/organisms/Modal/Modal";
import { useAttendanceEndMutationQuery } from "@/hook/attendance/manager/useAttendanceEndMutationQuery";
import { FormatClubId } from "@/utils/extractPathElements";

interface CurrentAttendanceProps {
  attendanceUpdated: boolean;
  onAttendanceUpdate: () => void;
}

const CurrentAttendance: React.FC<CurrentAttendanceProps> = ({
  attendanceUpdated,
  onAttendanceUpdate,
}) => {
  const { data, isError, refetch } = useAttendanceListQuery(FormatClubId());

  const [selectedAttendance, setSelectedAttendance] =
    useState<AttendanceListItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { mutate: endAttendance } = useAttendanceEndMutationQuery({
    clubId: FormatClubId(),
    scheduleId: selectedAttendance?.scheduleId || 0,
  });

  useEffect(() => {
    refetch();
  }, [attendanceUpdated, refetch]);

  const handleEndAttendance = () => {
    if (selectedAttendance) {
      endAttendance("", {
        onSuccess: () => {
          console.log("Attendance ended successfully");
          onAttendanceUpdate(); // 상태 변경 함수 호출
          setIsModalOpen(false);
        },
        onError: (error) => {
          console.error("Error ending attendance:", error);
        },
      });
    }
  };

  if (isError) {
    return (
      <div>
        <Text
          color="#FFF"
          fontSize="1.1875rem"
          fontWeight="600"
          className="today_schedule"
        >
          {CURRENT_ATTENDANCE_TITLE}
        </Text>
        Error loading schedules
      </div>
    );
  }

  return (
    <div>
      <Text
        color="#FFF"
        fontSize="1.1875rem"
        fontWeight="600"
        className="current_attendance"
      >
        {CURRENT_ATTENDANCE_TITLE}
      </Text>

      {data && data.data && data.data.data && data?.data?.data?.length > 0 ? (
        data.data.data.map((attendance) => (
          <AttendanceItem
            key={attendance.scheduleId}
            scheduleId={attendance.scheduleId}
            attendanceStatus={attendance.attendanceStatus}
            scheduleName={attendance.scheduleName}
            scheduleDate={new Date(
              attendance.scheduleDateTime
            ).toLocaleDateString()}
            scheduleTime={new Date(
              attendance.scheduleDateTime
            ).toLocaleTimeString()}
            onClick={() => {
              setSelectedAttendance(attendance);
              setIsModalOpen(true);
            }}
          />
        ))
      ) : (
        <div style={{ width: "auto", height: "7.125rem" }}></div>
      )}

      {/* Modal */}
      {selectedAttendance && (
        <Modal isOpen={isModalOpen}>
          <Modal.Dimmed />
          <Modal.Header>
            <Modal.Title>{ATTENDANCE_MODAL.end}</Modal.Title>
          </Modal.Header>
          <Modal.Content></Modal.Content>
          <Modal.Footer>
            <Modal.Button onClick={handleEndAttendance}>
              {ATTENDANCE_MODAL.yes}
            </Modal.Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default CurrentAttendance;
