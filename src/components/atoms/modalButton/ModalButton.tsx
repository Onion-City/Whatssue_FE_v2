import { Text } from "../text";

interface ModalButtonProps {
  content: string;
  onClick?: () => void;
  background?: string;
  color?: string;
  fontSize?: string;
  fontWeight?: string;
}
export const ModalButton = ({
  content,
  color = "#fff",
  fontSize = "0.9375rem",
  fontWeight = "600",
  background = "#2B2B2B",
  onClick,
}: ModalButtonProps) => {
  const style: React.CSSProperties = {
    width: "100%",
    borderRadius: "3.125rem",
    height: "2.8125rem",
    background: background,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <div style={style} onClick={onClick}>
      <Text color={color} fontSize={fontSize} fontWeight={fontWeight}>
        {content}
      </Text>
    </div>
  );
};
