import { Button } from "@/components/atoms/button";
import { COLORS } from "@/styles";
import { ReactNode } from "react";

interface ModalButtonsProps {
  children?: ReactNode;
  onClick?: () => void;
  type?: 'submit' | 'button';
  size?: 'sm' | 'md' | 'lg' | 'pr' | 'lt' | 'rt';
  color?: string;
  backgroundColor?: string;
}
export const ModalButtons = ({ 
  children, 
  onClick, 
  type, 
  size = 'pr',
  color = COLORS.white,
  backgroundColor = COLORS.background
}: ModalButtonsProps) => {
  return (
    <Button 
      size={size}
      backgroundColor={backgroundColor}
      color={color}
      onClick={onClick}
      type={type}
    >{children}</Button>
  )
}