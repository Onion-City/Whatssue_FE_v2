import { Text } from "@/components/atoms/text";
import "./RegisterBox.css";

interface RegisterBoxProps {
    title?: string;
    placeholder?: string;
    children?: any;
};

export const RegisterBox = ({title, children}: RegisterBoxProps) => {
    return(
        <div className="registerBox">
            <span className="wd-20">
                <Text
                    color="#fff"
                    fontSize="0.9375rem"
                    fontWeight="500"
                >{title}</Text>
            </span>
            {children}
        </div>
    )
}