import { useState } from 'react';
import { createPortal } from 'react-dom';

import { Button, ChatAddModal, Div } from 'components';

export const ChatListFooter = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <Div _margin="auto 30px 30px">
      <Button _width="100%" _padding="12px 0" _onClick={openModal}>
        채팅방 추가하기
      </Button>

      {modalOpen &&
        createPortal(<ChatAddModal closeModal={closeModal} />, document.body)}
    </Div>
  );
};
