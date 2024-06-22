import { IMAGES } from "@/constants/images";
import Image from "next/image";
import { ReactNode } from "react";
import styles from "./Modal.module.css";

interface ModalHeaderProps {
  children?: ReactNode;
  closeModal?: () => void;
}

export const ModalHeader = ({
  children,
  closeModal
}: ModalHeaderProps) => {
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