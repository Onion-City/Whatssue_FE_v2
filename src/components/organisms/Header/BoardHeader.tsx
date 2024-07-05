"use client";
import { IMAGES } from "@/constants/images";
import { usePostDeleteMutation } from "@/hook/post/usePostDeleteMutation";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import PostDropdown from "../PostDropdown/PostDropdown";
import "./Header.css";

interface ClubHeaderProps {
  color?: boolean;
}
export function BoardHeader({ color }: ClubHeaderProps) {
  const router = useRouter();
  const pathname = usePathname();
  const { mutate: postDeleteMutate } = usePostDeleteMutation();
  const handleDelete = () => {
    postDeleteMutate();
  };
  const handleModify = () => {
    router.push(`${pathname}/modify`);
  };
  const menuItems = [
    { text: "수정", onClick: handleModify },
    { text: "삭제", onClick: handleDelete },
    { text: "URL 공유" },
  ];

  return (
    <header id="header">
      <div className={`boardHeader ${color && "black"}`}>
        <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
          <Image
            src={IMAGES.back}
            alt="back"
            placeholder="blur"
            onClick={() => router.back()}
          />
          <PostDropdown item={menuItems} />
        </div>
      </div>
    </header>
  );
}
