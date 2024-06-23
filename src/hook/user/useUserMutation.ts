import { http } from "@/apis/http";
import { signUpInfo } from "@/types/user/types";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

// 추가 회원가입 (/user/signUp)
export const useUserMutation = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: (data: signUpInfo) => http.post("/user/signUp", data),
    onSuccess: (res) => {
      alert("회원가입 성공!");
      console.log(res);
      router.push("/user/signup/complete");
    },
    onError: (err) => {
      console.log(err);
    },
  });
};
