import { IMAGES } from "@/constants/images";
import Image from "next/image";
import { ReactNode } from "react";
import styles from "./Modal.module.css";
import { useModalContext } from "./ModalProvider";

interface ModalHeaderProps {
  children?: ReactNode;
}

export const ModalHeader = ({
  children
}: ModalHeaderProps) => {
  const { closeModal } = useModalContext();
  return (
    <div 
      className={styles.modalHeader}
    >
      <div
        className={styles.modalHeader__img}
      >
        <span
          onClick={closeModal}
        >
          <Image
            src={IMAGES.closeBlack}
            alt="close"
            width={12}
            height={12}
          />
        </span>
      </div>
      {children}
    </div>
  )
};