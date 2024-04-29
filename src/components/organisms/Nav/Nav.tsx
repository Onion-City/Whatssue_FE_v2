import IconNavAtten from "@/assets/images/ic_nav_atten.svg";
import IconNavBoard from "@/assets/images/ic_nav_board.svg";
import IconNavHome from "@/assets/images/ic_nav_home.svg";
import IconNavMember from "@/assets/images/ic_nav_member.svg";
import IconNavMore from "@/assets/images/ic_nav_more.svg";
import { Text } from "@/components/atoms/text";
import { usePathname, useRouter } from "next/navigation";
import "./Nav.css";

interface NavItem {
  path: string;
  icon: React.ComponentType<{ fill?: string; stroke?: string }>; // 아이콘 컴포넌트 타입
  text: string;
}

const navItems: NavItem[] = [
  { path: "", icon: IconNavHome, text: "홈" },
  { path: "board", icon: IconNavBoard, text: "게시판" },
  { path: "atten", icon: IconNavAtten, text: "출석" },
  { path: "member", icon: IconNavMember, text: "맴버" },
  { path: "more", icon: IconNavMore, text: "더보기" },
];
export interface NavProps {
  title?: string;
  maxCnt?: number;
  type?: string;
  subtitle?: string;
  essential?: boolean;
}
export function Nav({ title, maxCnt, type, subtitle, essential }: NavProps) {
  const router = useRouter();
  const pathname = usePathname();
  const selectedPath = pathname.split("/")[1];
  const handleNavigate = (path: string) => {
    router.push(`/${path}`);
  };
  return (
    <div className="Nav__wrapper">
      {navItems.map(({ path, icon: Icon, text }) => (
        <div
          key={path}
          className="Nav__Icon"
          onClick={() => handleNavigate(path)}
        >
          <Icon
            fill={
              path === "atten"
                ? "none"
                : selectedPath === path
                  ? "#fff"
                  : "#989898"
            }
            stroke={selectedPath === path ? "#fff" : "#989898"}
          />
          <Text
            color={selectedPath === path ? "#fff" : "#989898"}
            fontSize="0.6875rem"
            fontWeight="600"
          >
            {text}
          </Text>
        </div>
      ))}
    </div>
  );
}
