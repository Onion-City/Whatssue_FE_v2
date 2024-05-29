// InputBox.tsx
import { FileUpload } from "@/components/atoms/fileUpload";
import { Input } from "@/components/atoms/input";
import { CodeInput } from "@/components/atoms/input/CodeInput";
import { Text } from "@/components/atoms/text";
import { Textarea } from "@/components/atoms/textarea";
import { Toggle } from "@/components/atoms/toggle";
import { COLORS } from "@/styles";
import { Controller } from "react-hook-form";
import { AuthBox } from "../authBox";
import { ChipBox } from "../chipBox/ChipBox";
import "./InputBox.css";

export interface InputBoxProps {
  title?: string;
  maxCnt?: number;
  type?: string;
  subtitle?: string;
  essential?: boolean;
  name: string;
  control: any;
}

const renderInputComponent = (type: string, maxCnt: number | undefined, name: string, field: any) => {
  switch (type) {
    case "input":
      return <Input maxCnt={maxCnt} name={name} field={field} />;
    case "numInput":
      return <CodeInput maxCnt={maxCnt} {...field} />;
    case "textarea":
      return <Textarea maxCnt={maxCnt} name={name} field={field} />;
    case "toggle":
      return <Toggle name={name} field={field} />;
    case "chip":
      return <ChipBox field={field}/>;
    case "fileUpload":
      return <FileUpload name={name} field={field} />;
    case "btnInput":
      return <AuthBox />;
    default:
      return <Input maxCnt={maxCnt} name={name} field={field} />;
  }
};

export function InputBox({ title, maxCnt, type = "input", subtitle, essential, name, control }: InputBoxProps) {
  const inputComponent = (
    <Controller
      name={name}
      control={control}
      render={({ field }) => renderInputComponent(type, maxCnt, name, field)}
    />
  );

  return (
    <div className="registerBox">
      <div className="textBox">
        <Text fontSize="1.1875rem" color={COLORS.white}>
          {title}
        </Text>
        {essential && (
          <Text fontSize="1.1875rem" color={COLORS.red}>
            *
          </Text>
        )}
      </div>
      {subtitle && (
        <Text fontSize="0.6875rem" color={COLORS.whitegrey} fontWeight="500">
          {subtitle}
        </Text>
      )}
      {inputComponent}
    </div>
  );
}
