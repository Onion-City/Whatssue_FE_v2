import Warning from "@/assets/images/Warning.png";
import { Text } from "@/components/atoms/text";
import Image from "next/image";
import { SIGNUP_TITLE } from "../constants";
import "./Signup.css";

export const SignupHeader = () => {
    return(
        <div className="signupHeader">
            <Image 
                src={Warning} 
                alt="warn" 
                width={24} 
                height={24}
            />
            <Text
                color="#fff"
                fontWeight="700"
                fontSize="1.3125rem"
            >{SIGNUP_TITLE}</Text>
        </div>
    )
};