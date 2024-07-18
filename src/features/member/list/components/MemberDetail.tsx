import { Button } from "@/components/atoms/button";
import { Text } from "@/components/atoms/text";
import { InfoIcon } from "@/components/molecules/infoIcon";
import { ICONS } from "@/constants/images";
import { useMemberQuery } from "@/hook/member/useMemberQuery";
import { formatPhoneNumber } from "@/utils/phone";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import "./MemberDetail.css";
const MemberDetail = () => {
  const router = useRouter();
  const pathName = usePathname();
  const { data, isLoading } = useMemberQuery(
    parseInt(pathName.split("/")[3], 10)
  );
  const handleModify = () => {
    router.push(`${pathName}/edit`);
  };
  if (isLoading) {
    return <div>loading</div>;
  }
  return (
    <div className="member__detail__wrapper">
      <div className="member__detail__profile__wrapper">
        <Image
          src={data?.data.profileImage || ICONS.memberProfileNone}
          alt="profile"
          className="member__detail__profile"
          height={100}
          width={100}
        />
        <div className="member__detail__profile_inner">
          <div className="member__detail__profile_inner_name">
            <Text color="#fff" fontSize="1.5625rem" fontWeight="700">
              {data?.data.memberName}
            </Text>
            <Image src={ICONS.changeProfile} alt="change" />
          </div>
          <Text color="#fff" fontSize="0.9375rem" fontWeight="600">
            {data?.data.memberIntro}&nbsp;
          </Text>
        </div>
      </div>
      <InfoIcon
        type="phone"
        content={formatPhoneNumber(data?.data.userPhone)}
        imgWidth="0.9375rem"
        imgHeight="1.25rem"
      />
      <InfoIcon
        type="email"
        content={data?.data.userEmail || ""}
        imgWidth="1.1875rem"
        imgHeight="0.875rem"
      />

      <div className="member__detail__bottom" onClick={handleModify}>
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
