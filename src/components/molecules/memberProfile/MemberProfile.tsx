import { Text } from "@/components/atoms/text";
import { ICONS } from "@/constants/images";
import Image, { StaticImageData } from "next/image";
import "./MemberProfile.css";
export enum UserRole {
  me = "나",
  manager = "관리자",
  other = "",
}
interface MemberProfileProps {
  profile?: StaticImageData;
  name: string;
  isUser?: UserRole;
  message?: string;
}
export const MemberProfile = ({
  profile = ICONS.memberProfileNone,
  name,
  isUser = UserRole.other,
  message = "",
}: MemberProfileProps) => {
  const isManager = isUser === UserRole.manager;
  const isOther = isUser === UserRole.other;
  return (
    <div className="member__info__box__wrapper">
      <div className="member__info__box">
        <Image src={profile} alt="profile" className="member__profile" />
        <div>
          <div className="member__info__box__inner">
            <Text color="#fff" fontSize="0.9375rem" fontWeight="600">
              {name}
            </Text>
            {isManager && (
              <Image
                src={ICONS.manager}
                alt="manager"
                className="member__manager__img"
              />
            )}
            {!isOther && (
              <Text
                color="#2B2B2B"
                fontSize="0.5625rem"
                fontWeight="600"
                className={`member__point ${isManager ? "menager" : "me"}`}
              >
                {isUser}
              </Text>
            )}
          </div>
          <Text color="#D9D9D9" fontSize="0.6875rem" fontWeight="600">
            {message}
          </Text>
        </div>
      </div>
    </div>
  );
};
