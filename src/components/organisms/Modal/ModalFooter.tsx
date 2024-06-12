import { ReactNode } from 'react';
import styles from "./Modal.module.css";

interface ModalFooterProps {
  children?: ReactNode;
}

export const ModalFooter = ({
  children
}: ModalFooterProps) => {
  return (
    <div className={styles.modalFooter}>{children}</div>
  )
}