import { Text } from "@/components/atoms/text";
import { COLORS } from "@/styles";
import { useRouter } from "next/navigation";

const HomeRegBtn = () => {
  const router = useRouter();
  return (
    <div className="homeRegBtn">
      <span
        className="homeRegBtn__back"
        onClick={() => router.push("/club/calendar/register")}
      >
        <Text color={COLORS.whitegrey} fontSize="0.875rem">
          일정 생성
        </Text>
      </span>
    </div>
  );
};

export default HomeRegBtn;
