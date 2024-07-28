"use client";
import { Modal } from "@/components/atoms/modal";
import { useMemberDelete } from "@/hook/member/useMemberDelete";
import { useMemberRoloChangeMutation } from "@/hook/member/useMemberRoloChangeMutation";
import { FormatClubId } from "@/utils/extractPathElements";
import { useRouter } from "next/navigation";
import { useState } from "react";
import "./Header.css";
import { ToggleHeader } from "./ToggleHeader";

interface memberProps {
  role: "MEMBER" | "MANAGER";
  memberId: number;
}
export function MemberHeader({ role, memberId }: memberProps) {
  const changeRoloType = role !== "MANAGER" ? "관리자" : "멤버";
  const [isDeleteModal, setIsDeleteModal] = useState<boolean>(false);
  const router = useRouter();
  const clubId = FormatClubId();
  const { mutate: DeleteMember } = useMemberDelete(clubId);
  const { mutate: ChangeRolo } = useMemberRoloChangeMutation(clubId);
  const handleDelete = () => {
    setIsDeleteModal(false);
    DeleteMember();
  };
  const handleModify = () => {
    const changeRolo = role !== "MANAGER" ? "MANAGER" : "MEMBER";
    ChangeRolo({ role: changeRolo, memberId: memberId });
  };
  const menuItems = [
    { text: `${changeRoloType}로 권한 변경`, onClick: handleModify },
    { text: "추방하기", onClick: () => setIsDeleteModal(true), color: "#F44" },
  ];
  return (
    <ToggleHeader itemObj={menuItems} onRouter={router}>
      {isDeleteModal && (
        <Modal
          title="추방하시겠습니까?"
          agree="확인"
          denial="취소"
          agreeVoid={handleDelete}
          denialVoid={() => setIsDeleteModal(false)}
        />
      )}
    </ToggleHeader>
  );
}
