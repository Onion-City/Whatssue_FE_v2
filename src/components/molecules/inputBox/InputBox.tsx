import { FileUpload } from "@/components/atoms/fileUpload";
import { Input } from "@/components/atoms/input";
import { Text } from "@/components/atoms/text";
import { Textarea } from "@/components/atoms/textarea";
import { Toggle } from "@/components/atoms/toggle";

import { AuthBox } from "../authBox";
import { ChipBox } from "../chipBox/ChipBox";

import { FieldValues, useForm } from "react-hook-form";
import "./InputBox.css";

export interface InputBoxProps {
    title?: string;
    maxCnt?: number;
    type?: string;
    subtitle?: string;
    essential?: boolean;
    name?: string;
}
export function InputBox ( {title, maxCnt, type, subtitle, essential, name}: InputBoxProps ) {
    const {
        control,
    } = useForm<FieldValues>();

    let inputComponent;
    switch (type) {
        case "input":
            inputComponent = <Input maxCnt={maxCnt} name="name" control={control}/>;
            break;
        case "textarea":
            inputComponent = <Textarea maxCnt={maxCnt} />;
            break;
        case "toggle":
            inputComponent = <Toggle />;
            break;
        case "chip":
            inputComponent = <ChipBox />
            break;
        case "fileUpload":
            inputComponent = <FileUpload />;
            break;
        case "btnInput": 
            inputComponent = <AuthBox />;
            break;
        default:
            // default는 Input
            inputComponent = <Input maxCnt={maxCnt} name="name" control={control}/>;
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
