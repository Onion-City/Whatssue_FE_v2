import { http } from "@/apis/http";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

interface AttendanceItem {
  id: string;
  status: string;
  title: string;
  date: string;
  time: string;
}

interface AttendanceListProps {
  clubId: string;
}

const fetchAttendanceList = async (
  clubId: string
): Promise<AttendanceItem[]> => {
  const response: AxiosResponse<AttendanceItem[]> = await http.get(
    `/api/${clubId}/attendance-list`
  );
  return response.data;
};

export const useAttendanceList = ({
  clubId,
}: AttendanceListProps): UseQueryResult<AttendanceItem[], Error> => {
  return useQuery<AttendanceItem[], Error>({
    queryKey: ["attendanceList", clubId],
    queryFn: () => fetchAttendanceList(clubId),
  });
};
