import { Modal } from "@/components/organisms/Modal/Modal";
import { COLORS } from "@/styles";

interface HomeRequestedModalProps {
  isOpen: boolean;
  closeModal: () => void;
  title: string;
  date: string;
  content: string|undefined;
  cancelMutate:()=>void;
}
const HomeRequestedModal = ({
  isOpen,
  closeModal,
  title,
  date,
  content,
  cancelMutate,
}: HomeRequestedModalProps) => {
  const handleSubmit = () => {
    cancelMutate();
    closeModal();
  };
  return (
    <Modal isOpen={isOpen}>
      <Modal.Dimmed />
      <Modal.Header>
        <Modal.Title>{title}</Modal.Title>
        <Modal.Subtitle>{date}</Modal.Subtitle>
      </Modal.Header>
      <Modal.Content>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 5%",
            height: "80%",
            backgroundColor: COLORS.white,
          }}
        >
          {content}
        </div>
      </Modal.Content>
      <Modal.Footer>
        <Modal.Button onClick={handleSubmit}>확인</Modal.Button>
      </Modal.Footer>
    </Modal>
  );
};
export default HomeRequestedModal;
