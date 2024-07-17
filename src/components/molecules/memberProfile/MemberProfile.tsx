import { Text } from "@/components/atoms/text";
import { ICONS } from "@/constants/images";
import { MemberInfo } from "@/types/member";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import "./MemberProfile.css";

export const MemberProfile = ({
  memberId,
  memberName,
  memberIntro = "",
  role,
  memberImage = ICONS.memberProfileNone,
}: MemberInfo) => {
  const pathName = usePathname();
  const router = useRouter();
  const isManager = role == "MANAGER";
  const handleDetailMemberProfile = () => {
    router.push(`${pathName}/${memberId}`);
  };
  return (
    <div
      className="member__info__box__wrapper"
      onClick={handleDetailMemberProfile}
    >
      <div className="member__info__box">
        <Image
          src={memberImage}
          alt="profile"
          className="member__profile"
          width={100}
          height={100}
        />
        <div>
          <div className="member__info__box__inner">
            <Text color="#fff" fontSize="0.9375rem" fontWeight="600">
              {memberName}
            </Text>
            {isManager && (
              <Image
                src={ICONS.manager}
                alt="manager"
                className="member__manager__img"
                width={100}
                height={100}
              />
            )}

            <Text
              color="#2B2B2B"
              fontSize="0.5625rem"
              fontWeight="600"
              className={`member__point ${isManager ? "menager" : "me"}`}
            >
              {isManager ? "관리자" : "멤버"}
            </Text>
          </div>
          <Text color="#D9D9D9" fontSize="0.6875rem" fontWeight="600">
            {memberIntro}
          </Text>
        </div>
      </div>
    </div>
  );
};
