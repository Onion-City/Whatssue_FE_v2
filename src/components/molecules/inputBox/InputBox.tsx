import { Chip } from "@/components/atoms/chip";
import { Input } from "@/components/atoms/input";
import { Text } from "@/components/atoms/text";
import { Textarea } from "@/components/atoms/textarea";
import { Toggle } from "@/components/atoms/toggle";
import { REGISTER_CHIP_ARR } from "@/features/user/club/register/const";
import "./InputBox.css";

export interface InputBoxProps {
    title?: string;
    maxCnt?: number;
    type?: string;
    subtitle?: string;
    essential?: boolean;
}
export function InputBox ( {title, maxCnt, type, subtitle, essential}: InputBoxProps ) {
    let inputComponent;
    switch (type) {
        case "input":
            inputComponent = <Input maxCnt={maxCnt} />;
            break;
        case "textarea":
            inputComponent = <Textarea maxCnt={maxCnt} />;
            break;
        case "toggle":
            inputComponent = <Toggle />;
            break;
        case "chip":
            inputComponent = (
                <div className="chipBox">
                    {REGISTER_CHIP_ARR.map((name, index) => (
                        <Chip 
                            key={index}
                            fontSize="0.8125rem"
                            fontWeight="700"
                        >{name}</Chip>
                    ))}
                </div>
            );
            break;
        default:
            // default는 Input
            inputComponent = <Input maxCnt={maxCnt} />;
            break;
    }
    return (
        <div className="registerBox">
            <div className="textBox">
                <Text fontSize="1.1875rem" color="#fff">{title}</Text>
                {essential && <Text fontSize="1.1875rem" color="#FF4444">*</Text>}
            </div>
            {subtitle && <Text fontSize="0.6875rem" color="#d9d9d9" fontWeight="500">{subtitle}</Text>}
            {inputComponent}
        </div>
    );
};
