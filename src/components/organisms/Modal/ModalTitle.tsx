import { Text } from "@/components/atoms/text";
import { ReactNode } from "react";

interface ModalTitleProps {
  children?: ReactNode;
}
export const ModalTitle = ({ children }: ModalTitleProps) => {
  return (
    <Text
      fontSize="1.25rem"
    >{children}</Text>
  )
}