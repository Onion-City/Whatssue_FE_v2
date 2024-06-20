import { Button } from "@/components/atoms/button";
import { COLORS } from "@/styles";
import { ReactNode } from "react";

interface ModalButtonsProps {
  children?: ReactNode;
  onClick?: () => void;
  type?: 'submit' | 'button';
}
export const ModalButtons = ({ children, onClick, type }: ModalButtonsProps) => {
  return (
    <Button 
      size="pr"
      backgroundColor={COLORS.background}
      color={COLORS.white}
      onClick={onClick}
      type={type}
    >{children}</Button>
  )
}