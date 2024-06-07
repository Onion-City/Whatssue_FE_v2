import { ICONS } from "@/constants/images";
import Image from "next/image";
import "./MappingImgItem.css";

interface MappingImgItemProps {
  imgUrl: string;
  index: number;
  onClick: (index: number) => void;
}
export const MappingImgItem = ({
  imgUrl,
  index,
  onClick,
}: MappingImgItemProps) => {
  return (
    <div className="mapping__img__item__img">
      <Image
        src={imgUrl}
        alt={`mapping__img__item__img__${index}`}
        width={6.3875 * 16} // 1rem = 16px
        height={6.3875 * 16} // 1rem = 16px
      />
      <div
        className="mapping__img__item__remove"
        onClick={() => onClick(index)}
      >
        <Image src={ICONS.floatingPlus} alt="X" />
      </div>
    </div>
  );
};
