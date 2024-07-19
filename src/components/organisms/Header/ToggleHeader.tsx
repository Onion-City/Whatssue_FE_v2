"use client";
import { IMAGES } from "@/constants/images";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import Image from "next/image";
import PostDropdown from "../PostDropdown/PostDropdown";
import "./Header.css";

interface ClubHeaderProps {
  color?: boolean;
  itemObj: {
    text: string;
    onClick?: () => void;
  }[];
  onRouter: AppRouterInstance;
  children?: React.ReactNode;
}
export function ToggleHeader({
  color,
  itemObj,
  onRouter,
  children,
}: ClubHeaderProps) {
  //   const router = useRouter();
  return (
    <header id="header">
      <div className={`boardHeader ${color && "black"}`}>
        <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
          <Image
            src={IMAGES.back}
            alt="back"
            placeholder="blur"
            onClick={() => onRouter.back()}
          />
          <PostDropdown item={itemObj} />
        </div>
      </div>
      {children}
    </header>
  );
}
