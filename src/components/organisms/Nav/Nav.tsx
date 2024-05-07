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
