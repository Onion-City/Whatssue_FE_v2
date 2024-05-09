import { CodeInput } from "@/components/atoms/input/CodeInput";
import { Text } from "@/components/atoms/text";
import "./Attendance.css";
import { Button } from "@/components/atoms/button";
import Image from "next/image";
import { IMAGES } from "@/constants/images";
import { ATTEND_BTN } from "../constants/const";

const Attendance = () => {
  const ClubName = "코딩하는 도토리";

  return (
    // <Wrapper isHeader={true}>
    <div className="attendance">
      <Image src={IMAGES.close} alt="close" className="attendance__close" />

      <Image src={IMAGES.attendance} alt="lock" className="attendance__icon" />
      <Text
        color="#FFF"
        fontSize="1.3125rem"
        fontWeight="600"
        className="attendance__club"
      >
        {ClubName}
      </Text>

      <div className="attendance__code">
        {[...Array(3)].map((_, index) => (
          <CodeInput key={index} name={`invitationCode${index + 1}`} />
        ))}
      </div>

      <div className="attendance__enter">
        <Button>{ATTEND_BTN}</Button>
      </div>
    </div>
    // </Wrapper>
  );
};

export default Attendance;
