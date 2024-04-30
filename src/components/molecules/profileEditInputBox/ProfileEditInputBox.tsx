import { Input } from "@/components/atoms/input";
import { Text } from "@/components/atoms/text";
import { Toggle } from "@/components/atoms/toggle";
import { FieldValues, useForm } from "react-hook-form";
import "./ProfileEditInputBox.css";

export interface InputBoxProps {
  title?: string;
  maxCnt?: number;
  type?: string;
  subtitle?: string;
  essential?: boolean;
  name?: string;
}
export function ProfileEditInputBox({
  title,
  maxCnt,
  type,
  subtitle,
  essential,
  name,
}: InputBoxProps) {
  const { control } = useForm<FieldValues>();

  let inputComponent;
  switch (type) {
    case "input":
      inputComponent = <Input maxCnt={maxCnt} name="name" control={control} />;
      break;
    case "input&&toggle":
      inputComponent = (
        <>
          <Input maxCnt={maxCnt} name="name" control={control} />
        </>
      );
      break;
    default:
      // default는 Input
      inputComponent = <Input maxCnt={maxCnt} name="name" control={control} />;
      break;
  }
  return (
    <div className="registerBox">
      <div className="textBox">
        <Text fontSize="1.1875rem" color="#fff">
          {title}
        </Text>
        {essential && (
          <Text fontSize="1.1875rem" color="#FF4444">
            *
          </Text>
        )}
        {type === "input&&toggle" && (
          <div className="toggleBox">
            <Toggle
              backgroundColor="#404040"
              height="1.39006rem"
              width="2.8125rem"
            />
          </div>
        )}
      </div>
      {subtitle && (
        <Text fontSize="0.6875rem" color="#d9d9d9" fontWeight="500">
          {subtitle}
        </Text>
      )}
      {inputComponent}
    </div>
  );
}
