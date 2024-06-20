import { Text } from "@/components/atoms/text";
import { ReactNode } from "react";

interface ModalSubtitleProps {
  children?: ReactNode;
}

export const ModalSubtitle = ({ children }: ModalSubtitleProps) => {
  return (
    <Text
      fontSize="0.8125rem"
      fontWeight="500"
      color="#989898"
    >{children}</Text>
  )
}