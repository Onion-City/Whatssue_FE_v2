import { http } from "@/apis/http";
import { CommonNoPageRes } from "@/types";
import { JoinRequest } from "@/types/clubjoin";
import { useQuery } from "@tanstack/react-query";

// 모임가입 신청 거절 사유 조회
export const useJoinRejectedQuery = (joinRequestId: number, status: string) => {
  return useQuery<CommonNoPageRes<JoinRequest>>({
    queryKey: ["JoinRejected", joinRequestId],
    enabled: status === "REJECTED",
    queryFn: async () =>
      await http.get<CommonNoPageRes<JoinRequest>>(
        `/clubs/join/${joinRequestId}`,
        {
          headers: { accept: `*/*` },
        }
      ),
  });
};
