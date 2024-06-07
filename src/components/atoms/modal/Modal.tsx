import { ModalButton } from "../modalButton";
import { Text } from "../text";
import "./Modal.css";
interface ModalProps {
  title: string;
  subtitle?: string;
  agree: string;
  denial: string;
  agreeVoid: () => void;
  denialVoid: () => void;
}
export const Modal = ({
  title,
  subtitle,
  agree,
  denial,
  agreeVoid,
  denialVoid,
}: ModalProps) => {
  return (
    <div className="modal__wrapper">
      <div className="modal__content ">
        <Text color="#000" fontSize="1.30594rem" fontWeight="600">
          {title}
        </Text>
        <Text
          color="#8E8E8E"
          fontSize="0.8125rem"
          fontWeight="600"
          className="modal__subtitle__margin"
        >
          {subtitle}
        </Text>
        <ModalButton content={agree} onClick={agreeVoid} />
        <ModalButton
          content={denial}
          color="#F44"
          background="#fff"
          onClick={denialVoid}
        />
      </div>
    </div>
  );
};
