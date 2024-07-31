"use client";
import { Text } from "@/components/atoms/text";
import { usePathname, useRouter } from "next/navigation";
import "./Nav.css";
import { navItems } from "./constants";

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
  const selectedPath =
    pathname === "/" ? pathname : pathname.split("/").slice(1, 3).join("/");
  const handleNavigate = (path: string) => {
    const startedPath = pathname.split("/").slice(1)[0];
    if (startedPath) router.push(`/${path}`);
    else alert("게시판 부터!"); //수정 필요
  };
  return (
    <div className="Nav__wrapper">
      {navItems.map(({ path, icon: Icon, text }) => {
        const isIcon = path.startsWith(selectedPath);
        return (
          <div
            key={path}
            className="Nav__Icon"
            onClick={() => handleNavigate(path)}
          >
            <Icon
              fill={text === "출석" ? "none" : isIcon ? "#fff" : "#989898"}
              stroke={isIcon ? "#fff" : "#989898"}
            />
            <Text
              color={isIcon ? "#fff" : "#989898"}
              fontSize="0.6875rem"
              fontWeight="600"
            >
              {text}
            </Text>
          </div>
        );
      })}
    </div>
  );
}
