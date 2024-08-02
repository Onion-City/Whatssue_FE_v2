import { Text } from "@/components/atoms/text";

import { Modal } from "@/components/organisms/Modal/Modal";
import { ICONS } from "@/constants/images";
import { useClubsPrivateCodeMutation } from "@/hook/club/useClubsPrivateCodeMutation";
import { COLORS } from "@/styles";
import Image from "next/image";
import { useState } from "react";
import "./ClubInfo.css";

export default function ClubCodeBox({ 
  privateCode 
}: {
  privateCode: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);

  const { mutate } = useClubsPrivateCodeMutation();

  const updateCode = () => {
    const res = mutate();
    console.log(res);
    closeModal();
  }


  return (
    <>
      <div className="clubCodeBox">
        <div className="clubCodeBox__top">
          <Text
            color={COLORS.white}
            fontSize="1.75rem"
          >{privateCode}</Text>
          <span 
            className="clubCodeBox__top-img"
            onClick={() => setIsOpen(prev => !prev)}
          >
            <Image 
              src={ICONS.refresh}
              alt="refresh"
            />
          </span>
        </div>
        <div className="clubCodeBox__update">
          <Text
            color="#989898"
            fontSize="0.75rem"
            fontWeight="500"
          >최근 갱신일</Text>
          <Text
            color={COLORS.white}
            fontSize="0.75rem"
            fontWeight="500"
          >2024년 3월 2일</Text>
        </div>
      </div>

      <Modal isOpen={isOpen}>
        <Modal.Header>
          <Modal.Title>초대코드 갱신</Modal.Title>
        </Modal.Header>
        <Modal.Content>
          <Text
            color="#666"
            fontWeight="500"
          >초대코드를 갱신하시겠습니까?</Text>
        </Modal.Content>
        <Modal.Footer>
          <Modal.Button
            type="button"
            onClick={updateCode}
          >
            확인
          </Modal.Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
