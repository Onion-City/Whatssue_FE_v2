import { ReactNode } from 'react';
import styles from "./Modal.module.css";

interface ModalContentsProps {
  children?: ReactNode;
}
export const ModalContents = ({
  children,
}: ModalContentsProps) => {
  return (
    <div className={styles.modalContent}>{children}</div>
  )
}