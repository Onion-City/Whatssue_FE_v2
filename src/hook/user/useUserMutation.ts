import { http } from "@/apis/http";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export interface CreateUserProps {
  userName: string;
  userPhone: string;
  userEmail: string;
}

export const useUserMutation = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: (data: CreateUserProps) => http.post('/user/signUp', data),
    onSuccess: (res) => {
      alert('회원가입 성공!');
      console.log(res);
      router.push("/user/signup/complete");
    },
    onError: (err) => {
      console.log(err);
    }
  })
}