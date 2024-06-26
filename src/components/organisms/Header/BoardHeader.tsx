"use client";
import { Text } from "@/components/atoms/text";
import { ICONS, IMAGES } from "@/constants/images";
import { usePostDeleteMutation } from "@/hook/post/usePostDeleteMutation";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import "./Header.css";

interface ClubHeaderProps {
  color?: boolean;
}
export function BoardHeader({ color }: ClubHeaderProps) {
  const pathname = usePathname();
  const pathProps = pathname.split("/").slice(1);
  const postItem = {
    clubId: parseInt(pathProps[0], 10),
    postId: parseInt(pathProps[3], 10),
  };
  const router = useRouter();
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const handleIsOpenDropdown = () => {
    setIsOpenDropdown((prep) => !prep);
    console.log(isOpenDropdown);
  };
  const { mutate: postDeleteMutate } = usePostDeleteMutation(postItem);
  const menuItems = [
    { text: "수정" },
    { text: "삭제"},
    { text: "URL 공유"},
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
          <div style={{ marginLeft: "auto", position: "relative" }}>
            <Image
              src={ICONS.headerToggle}
              alt="toggle"
              onClick={handleIsOpenDropdown}
            />
            {isOpenDropdown && (
              <div className="dropdown">
                {menuItems.map((item, index) => (
                  <div
                    key={index}
                    className="underline"
                    onClick={()=>postDeleteMutate()}
                  >
                    <Text color="#fff" fontSize="1rem" fontWeight="300">
                      {item.text}
                    </Text>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
