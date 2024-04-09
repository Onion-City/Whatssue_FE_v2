import { LOGIN_SLOGAN } from "../constants/const";
import { IMAGES } from "@/constants/images";
import "./LoginTitle.css";

const LoginLogo = () => {
  return (
    <div className="login__title">
      <div className="login__slogan">{LOGIN_SLOGAN}</div>
      <img src={IMAGES.loginLogo} alt="logo" className="login_logo" />
    </div>
  );
};

export default LoginLogo;
