import Warning from "@/assets/images/ic_warning.png";
import { Text } from "@/components/atoms/text";
import Image from "next/image";
import { HOME_WARNING_ARR } from "../constants/const";
import "./HomeNoneContent.css";

// 빈 리스트가 아닐 경우 표기 x
const HomeNoneContent = () => {
  return (
    <div className="home__content__none">
      <Image
        src={Warning}
        alt="Warning"
        placeholder="blur"
      />
      <span className="home__content_none_title">
        {HOME_WARNING_ARR.explanation.title}
      </span>
      <Text color="#FFF" fontSize="0.8125rem">
        {HOME_WARNING_ARR.explanation.content}
      </Text>
      <Text color="#FFF" fontSize="0.8125rem">
        {HOME_WARNING_ARR.explanation.content2}
      </Text>
    </div>
  );
};

export default HomeNoneContent;
