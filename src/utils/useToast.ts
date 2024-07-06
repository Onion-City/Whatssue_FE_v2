import { toast, ToastOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ToastProps {
  message: string;
  type: "success" | "error" | "warning";
}

const useToast = () => {
  const showToast = ({ message, type }: ToastProps) => {
    const config: ToastOptions<unknown> = {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: true, // 진행시간 숨기기
      closeOnClick: true, // 클릭시 알람 꺼짐
      pauseOnFocusLoss: false,
      draggable: false,
      pauseOnHover: false,
    };
    switch (type) {
      case "success":
        return toast.success(message, config);
      case "error":
        return toast.error(message, config);
      case "warning":
        return toast.warning(message, config);
      default:
        return toast(message, config);
    }
  };
  return { showToast };
};

export default useToast;
