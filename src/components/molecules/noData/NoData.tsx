import { Text } from "@/components/atoms/text";
import { ICONS } from "@/constants/images";
import Image from "next/image";

import { COLORS } from "@/styles";
import "./NoData.css";

export const NoData = ({ title }: { title: string }) => {
  return(
    <div className="noData">
      <Image 
        src={ICONS.nodata}
        alt="no_data"
        className="noData__img"
      />
      <Text
        color={COLORS.white}
        fontSize="1rem"
      >{title}</Text>
    </div>
  )
}