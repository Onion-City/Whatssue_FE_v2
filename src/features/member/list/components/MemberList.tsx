import { Text } from "@/components/atoms/text";
import { MemberProfile } from "@/components/molecules/memberProfile";
import { useMemberListQuery } from "@/hook/member/useMemberListQuery";
import "./MemberList.css";

const MemberList = () => {
  const { data } = useMemberListQuery({ page: 0, size: 10 });
  const MemberCount = data?.data.content.length;
  return (
    <>
      <div className="member__list__top">
        <Text color="#fff" fontSize="0.6875rem" fontWeight="600">
          멤버 총 {MemberCount}명
        </Text>
      </div>
      <div className="member__list__bottom">
        {data?.data.content.map((item, idx) => (
          <MemberProfile
            key={idx}
            memberId={item.memberId}
            memberImage={item.memberImage}
            memberName={item.memberName}
            role={item.role}
            memberIntro={item.memberIntro}
          />
        ))}
      </div>
    </>
  );
};

export default MemberList;
