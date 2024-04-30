import { NavIcons } from "@/constants/images";

interface NavItem {
  path: string;
  icon: React.ComponentType<{ fill?: string; stroke?: string }>; // 아이콘 컴포넌트 타입
  text: string;
}
export const navItems: NavItem[] = [
  { path: "", icon: NavIcons.home, text: "홈" },
  { path: "board", icon: NavIcons.board, text: "게시판" },
  { path: "atten", icon: NavIcons.atten, text: "출석" },
  { path: "member", icon: NavIcons.member, text: "맴버" },
  { path: "more", icon: NavIcons.more, text: "더보기" },
];
