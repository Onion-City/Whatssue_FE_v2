import { Text } from "@/components/atoms/text";
import { MemberProfile } from "@/components/molecules/memberProfile";
import { Wrapper } from "@/components/organisms/Wrapper";
import { MemberTestArr1 } from "../constants/TestArr";
import "./MemberList.css";

const MemberList = () => {
  return (
    <Wrapper isHeader={true}>
      <div className="member__list__top">
        <Text color="#fff" fontSize="0.6875rem" fontWeight="600">
          멤버 총 43명
        </Text>
      </div>
      {MemberTestArr1.map((item, idx) => (
        <MemberProfile
          key={idx}
          profile={item.profile}
          name={item.name}
          isUser={item.isUser}
          message={item.message}
        />
      ))}
    </Wrapper>
  );
};

export default MemberList;
