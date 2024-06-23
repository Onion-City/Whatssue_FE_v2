import { http } from "@/apis/http";
import { CommonNoPageRes } from "@/types";
import { userInfo } from "@/types/user/types";
import { useQuery } from "@tanstack/react-query";

export const useGetInfoQuery = () => {
  return useQuery<CommonNoPageRes<userInfo>>({
    queryKey: ["userInfo"],
    queryFn: async () => {
      const response =
        await http.get<CommonNoPageRes<userInfo>>(`/user/getInfo`);
      return response;
    },
    staleTime: 1000,
  });
};
