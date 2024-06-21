// import { http } from "@/apis/http";
// import { useMutation } from "@tanstack/react-query";
// import { AttendanceData, AttendanceProp } from "@/types/attendance/types";

// export const useAttendanceMutationQuery = ({
//   clubId,
//   scheduleId,
//   memberId,
// }: AttendanceProp) => {
//   return useMutation({
//     mutationFn: (data: AttendanceData) =>
//       http.post(
//         `/api/${clubId}/schedules/${scheduleId}/attendance/${memberId}`,
//         data
//       ),
//     onSuccess: (data) => {
//       console.log("Attendance updated:", data);
//     },
//     onError: (error) => {
//       console.error("Error updating attendance:", error);
//     },
//   });
// };
