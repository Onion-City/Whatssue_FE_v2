import testImg from "@/assets/images/chiikyaw.png";
import { Button } from "@/components/atoms/button";
import { Text } from "@/components/atoms/text";
import { InfoIcon } from "@/components/molecules/infoIcon";
import { ICONS } from "@/constants/images";
import Image from "next/image";
import "./MemberDetail.css";
const MemberDetail = () => {
  return (
    <div className="member__detail__wrapper">
      <div className="member__detail__profile__wrapper">
        <Image
          src={testImg}
          alt="profile"
          className="member__detail__profile"
        />
        <div className="member__detail__profile_inner">
          <div className="member__detail__profile_inner_name">
            <Text color="#fff" fontSize="1.5625rem" fontWeight="700">
              김민서
            </Text>
            <Image src={ICONS.changeProfile} alt="change" />
          </div>
          <Text color="#fff" fontSize="0.9375rem" fontWeight="600">
            배드민터왕ㅇ&nbsp;
          </Text>
        </div>
      </div>
      <InfoIcon
        type="phone"
        content="010-3952-3928"
        imgWidth="0.9375rem"
        imgHeight="1.25rem"
      />
      <InfoIcon
        type="email"
        content="kms02330233@gmail.com"
        imgWidth="1.1875rem"
        imgHeight="0.875rem"
      />

      <div className="member__detail__bottom">
        <Button
          fontSize="0.9375rem"
          fontWeight="600"
          width="90vw"
          height="3.125rem;"
        >
          프로필 편집하기
        </Button>
      </div>
    </div>
  );
};
export default MemberDetail;
