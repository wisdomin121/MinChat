import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { Button, Div, Input, Label, Modal } from 'components';
import { useChatStore } from 'stores';

export const ChatListFooter = () => {
  const { maxNumber, setMaxNumber, addChatList } = useChatStore();
  const [modalOpen, setModalOpen] = useState(false);
  const [title, setTitle] = useState('');

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const addChat = () => {
    addChatList({
      chat_id: `chat_${maxNumber + 1}`,
      chat_title: title,
      chat_last_message: '',
      chat_last_time: '',
    });

    setMaxNumber();

    closeModal();
  };

  useEffect(() => {
    setTitle('');
  }, [modalOpen]);

  return (
    <Div _margin="auto 30px 30px">
      <Button _width="100%" _padding="12px 0" _onClick={openModal}>
        채팅방 추가하기
      </Button>

      {modalOpen &&
        createPortal(
          <Modal>
            <Label text="채팅방 추가하기" _fontSize="b2" _fontWeight="bold" />
            <Input
              _value={title}
              _placeholder="채팅방 제목을 입력해주세요"
              _margin="10px 0"
              _padding="12px 8px"
              _background_color="blue_1"
              _border_radius={5}
              setValue={setTitle}
            />
            <Div _gap={4} _margin="0 0 0 auto">
              <Button
                _width="fit-content"
                _padding="4px 8px"
                _onClick={addChat}
              >
                추가
              </Button>
              <Button
                _width="fit-content"
                _padding="4px 8px"
                _onClick={closeModal}
              >
                닫기
              </Button>
            </Div>
          </Modal>,
          document.body
        )}
    </Div>
  );
};
