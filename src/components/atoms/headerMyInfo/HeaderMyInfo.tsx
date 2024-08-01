import Image from "next/image";
import { useRouter } from "next/navigation";
import { Text } from "../text";
import "./HeaderMyInfo.css";

interface HeaderMyInfoProps {
  memberName: string;
  memberImg: string;
  memberRole: "MANAGER" | "MEMBER";
}
export function HeaderMyInfo({
  memberName,
  memberImg,
  memberRole,
}: HeaderMyInfoProps) {
  const router = useRouter();
  return (
    <div
      className="header__member__info"
      onClick={() => router.push("/user/profile")}
    >
      <div className="header__member__info__text">
        <Text color="#FFF" fontWeight="400" fontSize="0.8125rem">
          {memberName}
        </Text>
        <Text color="#989898" fontWeight="600" fontSize="0.6875rem">
          {memberRole === "MANAGER" ? "관리자" : "멤버"}
        </Text>
      </div>
      <Image src={memberImg} alt="profile" width={100} height={100} />
    </div>
  );
}
