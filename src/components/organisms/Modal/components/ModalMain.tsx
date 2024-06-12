"use client";
import { Children, ReactNode, isValidElement } from "react";
import { createPortal } from "react-dom";
import { ModalContents } from "../ModalContents";
import { ModalDimmed } from "../ModalDimmed";
import { ModalFooter } from "../ModalFooter";
import { ModalHeader } from "../ModalHeader";

// children 요소 중 Dimmed filtering
const ModalDimmedType= (<ModalDimmed />).type;
function getModalDimmed(children: ReactNode) {
  const childrenArray = Children.toArray(children);
  return childrenArray
    .filter(
      child => isValidElement(child) && child.type === ModalDimmedType,
    )
    .slice(0, 1)[0] || null;
}

// children 요소 중 Header filtering
const ModalHeaderType= (<ModalHeader />).type;
function getModalHeader(children: ReactNode) {
  const childrenArray = Children.toArray(children);
  return childrenArray
    .filter(
      child => isValidElement(child) && child.type === ModalHeaderType,
    );
}

// children 요소 중 Content filtering
const ModalContentType= (<ModalContents />).type;
function getModalContents(children: ReactNode) {
  const childrenArray = Children.toArray(children);
  return childrenArray
    .filter(
      child => isValidElement(child) && child.type === ModalContentType,
    );
}

// children 요소 중 Footer filtering
const ModalFooterType= (<ModalFooter />).type;
function getModalFooter(children: ReactNode) {
  const childrenArray = Children.toArray(children);
  return childrenArray
    .filter(
      child => isValidElement(child) && child.type === ModalFooterType,
    )
}

interface ModalMainProps {
  children?: ReactNode;
  isOpen: boolean;
};

export const ModalMain = ({ children, isOpen }: ModalMainProps) => {
  if(!isOpen){
    return null;
  }

  const modalHeader = getModalHeader(children);
  const modalContents = getModalContents(children);
  const modalFooter = getModalFooter(children);
  return createPortal(
    <div>
      <div>{getModalDimmed(children)}</div>
      {
        modalHeader && (
          <div>{modalHeader}</div>
        )
      }
      {
        modalContents && (
          <div>{modalContents}</div>
        )
      }
      {
        modalFooter && (
          <div>{modalFooter}</div>
        )
      }
    </div>
  , document.body);
}
