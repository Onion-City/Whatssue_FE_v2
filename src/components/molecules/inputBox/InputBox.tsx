import { FileUpload } from "@/components/atoms/fileUpload";
import { Input } from "@/components/atoms/input";
import { Text } from "@/components/atoms/text";
import { Textarea } from "@/components/atoms/textarea";
import { Toggle } from "@/components/atoms/toggle";

import { AuthBox } from "../authBox";
import { ChipBox } from "../chipBox/ChipBox";

import { CodeInput } from "@/components/atoms/input/CodeInput";
import { COLORS } from "@/styles";
import "./InputBox.css";

export interface InputBoxProps {
  title?: string;
  maxCnt?: number;
  type?: string;
  subtitle?: string;
  essential?: boolean;
  name: string;
  register: any;
  control?: any;
}
export function InputBox({
  title,
  maxCnt,
  type,
  subtitle,
  essential,
  name,
  register,
  control,
}: InputBoxProps) {
  // const { control } = useForm<FieldValues>();

  let inputComponent;
  switch (type) {
    case "input":
      inputComponent = 
        <Input 
          maxCnt={maxCnt} 
          name={name}
          // control={control} 
          register={register}
        />;
      break;
    case "numInput":
      inputComponent = (
        <CodeInput 
          maxCnt={maxCnt} 
          name="name" 
          control={control} 
        />
      );
      break;
    case "textarea":
      inputComponent = (
        <Textarea 
          maxCnt={maxCnt} 
          name={name}
          register={register}
        />
      );
      break;
    case "toggle":
      inputComponent = (
        <Toggle 
          name={name}
          register={register}
        />
      );
      break;
    case "chip":
      inputComponent = (
        <ChipBox />
      );
      break;
    case "fileUpload":
      inputComponent = (
        <FileUpload 
          name={name}
          register={register}
        />
      );
      break;
    case "btnInput":
      inputComponent = <AuthBox register={register} />;
      break;
    default:
      // default는 Input
      inputComponent = 
        <Input 
          maxCnt={maxCnt} 
          name="name" 
          // control={control} 
          register={register}
        />;
      break;
  }
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
