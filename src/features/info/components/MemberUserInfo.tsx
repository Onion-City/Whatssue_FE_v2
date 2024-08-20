import { Text } from "@/components/atoms/text";
// import { ICONS } from "@/constants/images";
import Image from "next/image";
import "./MemberInfo.css";

export const MemberUserInfo = ({
  memberName,
  memberProfileImage,
  role,
  memberIntro,
}: {
  memberName: string;
  memberProfileImage: string;
  role: "MANAGER" | "MEMBER";
  memberIntro?: string;
}) => {
  return (
    <section className="memberInfoUser">
      <div className="memberInfoUser__content">
        <span className="memberInfoUser__content-img">
          <Image
            src={memberProfileImage}
            alt="profile"
            width={53}
            height={53}
          />
        </span>
        <div className="memberInfoUser__content__txt">
          <div className="memberInfoUser__content__txt-title">
            <Text color="#fff" fontWeight="700" fontSize="0.9375rem">
              {memberName}
            </Text>
            <span className="memberInfoUser__content__txt__role">
              <Text color="#2b2b2b" fontSize="0.5625rem">
                {role === "MANAGER" ? "관리자" : "멤버"}
              </Text>
            </span>
            {/* <Image 
                            src={ICONS.edit}
                            alt="edit"
                        /> */}
          </div>
          <span className="memberInfoUser__content__txt-explain">
            <Text color="#fff" fontSize="0.6875rem" fontWeight="500">
              {memberIntro}
            </Text>
          </span>
        </div>
      </div>
      {/* <span className="memberInfoUser__btn">
                <Text
                    color="#fff"
                    fontSize="0.6875rem"
                    fontWeight="500"
                >{MEMBERINFO_TXT.clubChnBtn}</Text>
            </span> */}
    </section>
  );
};
