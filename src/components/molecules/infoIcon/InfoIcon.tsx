import { Text } from "@/components/atoms/text";
import { ICONS } from "@/constants/images";
import Image, { StaticImageData } from "next/image";
import "./InfoIcon.css";

interface InfoIconProps {
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  imgWidth?: string;
  imgHeight?: string;
  type?: string; //phone || email
  content: string;
}
export const InfoIcon = ({
  type,
  content,
  color = "#D9D9D9",
  fontSize = "0.8125rem",
  fontWeight = "600",
  imgHeight,
  imgWidth,
}: InfoIconProps) => {
  const typeImage: StaticImageData =
    type === "phone" ? ICONS.phoneNumber : ICONS.emailAddress;
  const style: React.CSSProperties = {
    width: imgWidth,
    height: imgHeight,
    marginRight: "0.94rem",
  };
  return (
    <div className="info__icon__box">
      <Image src={typeImage} alt={type || ""} style={style} />
      <Text color={color} fontSize={fontSize} fontWeight={fontWeight}>
        {content}&nbsp;
      </Text>
    </div>
  );
};
