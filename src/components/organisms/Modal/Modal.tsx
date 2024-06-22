"use client";
import { Children, ReactNode, isValidElement } from "react";
import { createPortal } from "react-dom";
import { ModalButtons } from "./ModalButtons";
import { ModalContents } from "./ModalContents";
import { ModalDimmed } from "./ModalDimmed";
import { ModalFooter } from "./ModalFooter";
import { ModalHeader } from "./ModalHeader";
import { ModalSubtitle } from "./ModalSubtitle";
import { ModalTitle } from "./ModalTitle";

import styles from "./Modal.module.css";

// children 요소 중 Header filtering
const ModalDimmedType = (<ModalDimmed />).type;
function getModalDimmed(children: ReactNode) {
  const childrenArray = Children.toArray(children);
  return childrenArray.filter(
    (child) => isValidElement(child) && child.type === ModalDimmedType
  );
}

// children 요소 중 Header filtering
const ModalHeaderType = (<ModalHeader />).type;
function getModalHeader(children: ReactNode) {
  const childrenArray = Children.toArray(children);
  return childrenArray.filter(
    (child) => isValidElement(child) && child.type === ModalHeaderType
  );
}

// children 요소 중 Content filtering
const ModalContentType = (<ModalContents />).type;
function getModalContents(children: ReactNode) {
  const childrenArray = Children.toArray(children);
  return childrenArray.filter(
    (child) => isValidElement(child) && child.type === ModalContentType
  );
}

// children 요소 중 Footer filtering
const ModalFooterType = (<ModalFooter />).type;
function getModalFooter(children: ReactNode) {
  const childrenArray = Children.toArray(children);
  return childrenArray.filter(
    (child) => isValidElement(child) && child.type === ModalFooterType
  );
}

interface ModalProps {
  children?: ReactNode;
  isOpen: boolean;
}

export const Modal = ({ children, isOpen }: ModalProps) => {
  if (!isOpen) {
    return null;
  }

  const modalHeader = getModalHeader(children);
  const modalContents = getModalContents(children);
  const modalFooter = getModalFooter(children);
  return createPortal(
    <>
      {getModalDimmed(children)}
      <div className={styles.modal}>
        {modalHeader && <div className={styles.modal__header}>{modalHeader}</div>}
        {modalContents && (
          <div className={styles.modal__content}>{modalContents}</div>
        )}
        {modalFooter && <div className={styles.modal__footer}>{modalFooter}</div>}
      </div>
    </>,
    document.body
  );
};

Modal.Dimmed = ModalDimmed;
Modal.Header = ModalHeader;
Modal.Content = ModalContents;
Modal.Footer = ModalFooter;

Modal.Title = ModalTitle;
Modal.Subtitle = ModalSubtitle;
Modal.Button = ModalButtons;
