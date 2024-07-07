import { ICONS } from "@/constants/images";
import Image from "next/image";

interface control {
  onClick: () => void;
}
const PostDropdownToggle = ({ onClick }: control) => {
  return (
    <Image src={ICONS.headerToggle} alt="toggle" onClick={onClick} />
  );
};

export default PostDropdownToggle;
