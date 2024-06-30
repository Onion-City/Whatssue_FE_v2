import { http } from "@/apis/http";
import { CommonNoPageRes } from "@/types";
import { signUpInfo, userInfo } from "@/types/user/types";
import { useQuery } from "@tanstack/react-query";

export const useGetUserInfoQuery = () => {
  return useQuery<CommonNoPageRes<signUpInfo>>({
    queryKey: ["userInfo"],
    queryFn: async () => {
      const response =
        await http.get<CommonNoPageRes<signUpInfo>>(`/user/getInfo`);
      return response;
    },
    staleTime: 1000,
  });
};
