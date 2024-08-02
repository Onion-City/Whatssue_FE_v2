"use client";
import { Modal } from "@/components/atoms/modal";
import { HeaderInfo } from "@/components/molecules/headerInfo";
import { usePostDeleteMutation } from "@/hook/post/usePostDeleteMutation";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import "./Header.css";

export function BoardHeader() {
  const [isDeleteModal, setIsDeleteModal] = useState<boolean>(false);
  const router = useRouter();
  const pathname = usePathname();
  const { mutate: postDeleteMutate } = usePostDeleteMutation();
  const handleDelete = () => {
    setIsDeleteModal(false);
    postDeleteMutate();
  };
  const handleModify = () => {
    router.push(`${pathname}/modify`);
  };
  const menuItems = [
    { text: "수정", onClick: handleModify },
    { text: "삭제", onClick: () => setIsDeleteModal(true), color: "#F44" },
    { text: "URL 공유" },
  ];
  return (
    <>
      <HeaderInfo isBack={true} isDropdown={menuItems}/>
      {isDeleteModal && (
        <Modal
          title="삭제하시겠습니까?"
          agree="확인"
          denial="취소"
          agreeVoid={handleDelete}
          denialVoid={() => setIsDeleteModal(false)}
        />
      )}
    </>
  );
}
