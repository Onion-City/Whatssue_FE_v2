import { Text } from '@/components/atoms/text';
import { useEffect, useState } from 'react';
import ClubCodeBox from './ClubCodeBox';

import { Modal } from '@/components/organisms/Modal/Modal';
import { useClubsIsPrivateMutation } from '@/hook/club/useClubsIsPrivateMutation';
import "../../../../components/atoms/toggle/Toggle.css";
import { CLUBPRIVINFO_TXT, ISPRIVATE_MODAL } from '../constants';

interface ClubPrivateInfoTypes {
  isPrivate?: boolean;
  privateCode?: string;
};

interface privateInfos {
  privateInfos: ClubPrivateInfoTypes
}

export const ClubPrivateInfo = ({ privateInfos }: privateInfos) => {
  const [on, setOn] = useState(privateInfos.isPrivate ?? false);

  useEffect(() => {
    if (privateInfos.isPrivate) {
      setOn(privateInfos.isPrivate);
    }
  }, [privateInfos]);

  const inputStyle: React.CSSProperties = {
    border: "none",
    height: "1px",
    margin: "-1px",
    overflow: "hidden",
    padding: "0px",
    position: "absolute",
    width: "1px",
    whiteSpace: "nowrap",
  };

  const spanStyle: React.CSSProperties = {
    boxSizing: "initial",
    display: "inline-block",
    outline: "0",
    width: "4rem",
    height: "2rem",
    position: "relative",
    cursor: "pointer",
    userSelect: "none",
    backgroundColor: on ? "#51F8C4" : "#404040",
    borderRadius: "2rem",
    padding: "2px",
    transition: "all 0.4s ease",
    border: "2px solid #e8eae9",
  };

  // 모집 여부 모달
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const { mutate } = useClubsIsPrivateMutation();

  const updateIsPrivate = () => {
    const res = mutate(on);
    console.log(res);
    setOn(prev => !prev);
    closeModal();
  }

  return (
    <>
    <div className="clubInfo">
      <div className='clubInfo__box'>
        <Text
          color="#C2C2C2"
          fontSize="0.9375rem"
        >{CLUBPRIVINFO_TXT.isPrivate}</Text>
        <div>
          <label aria-label={"Toggle"} style={{ display: "inline" }}>
            <input
              className="toggle-input"
              style={inputStyle}
              type="checkbox"
              checked={on ?? false}
              onChange={() => openModal()}
              data-testid="toggle-input"
            />
            <span
              className={`toggle-btn ${on ? "on" : "off"}`}
              style={spanStyle}
            />
          </label>
        </div>
      </div>
      <div className='clubInfo__box'>
        <Text
          color="#C2C2C2"
          fontSize="0.9375rem"
        >{CLUBPRIVINFO_TXT.privateCode}</Text>
        {privateInfos &&
        privateInfos.privateCode &&
          <ClubCodeBox 
            privateCode={privateInfos.privateCode}
          />
        }
      </div>
    </div>

    <Modal isOpen={isOpen}>
      <Modal.Header>
        <Modal.Title>{ISPRIVATE_MODAL.title}</Modal.Title>
      </Modal.Header>
      <Modal.Content>
        <Text
          color="#666"
          fontWeight="500"
        >{ISPRIVATE_MODAL.subTitle}</Text>
      </Modal.Content>
      <Modal.Footer>
        <Modal.Button
          type="button"
          onClick={updateIsPrivate}
        >
          {ISPRIVATE_MODAL.btn}
        </Modal.Button>
      </Modal.Footer>
    </Modal>
    </>
  )
}
