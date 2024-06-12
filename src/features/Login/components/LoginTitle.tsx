import { LOGIN_SLOGAN } from "../constants/const";
import { IMAGES } from "@/constants/images";
import "./Login.css";
import Image from "next/image";
import { Text } from "@/components/atoms/text";

const LoginLogo: React.FC = () => {
  return (
    <div className="login__title">
      <Text
        color="#fff"
        fontSize="0.9375rem"
        fontWeight="500"
        className="login__slogan"
      >
        {LOGIN_SLOGAN}
      </Text>
      <Image src={IMAGES.loginLogo} alt="logo" className="login_logo" />
    </div>
  );
};

export default LoginLogo;
