import { useState } from 'react';

import { Button, Div, Input, Label, Modal } from 'components';
import { useChatStore } from 'stores';

interface IChatAddModal {
  closeModal: () => void;
}

export const ChatAddModal = ({ closeModal }: IChatAddModal) => {
  const { chatListLength, setChatListLength, addChatList, addChatInfo } =
    useChatStore();
  const [title, setTitle] = useState('');
  const [members, setMembers] = useState('');

  const addChat = () => {
    if (title === '') {
      alert('제목을 입력해주세요');
      return;
    }

    const chatId = `chat_${chatListLength + 1}`;

    setChatListLength();
    addChatInfo(chatId, title, members);
    addChatList(chatId, {
      chat_title: title,
      chat_last_message: '',
      chat_last_time: '',
    });

    setTitle('');
    setMembers('');
    closeModal();
  };

  return (
    <Modal>
      <Label text="채팅방 추가하기" _fontSize="b2" _fontWeight="bold" />
      <Input
        _value={title}
        _placeholder="채팅방 제목을 입력해주세요"
        _margin="10px 0"
        _padding="12px 8px"
        _backgroundColor="blue_1"
        _borderRadius={5}
        setValue={setTitle}
      />
      <Input
        _value={members}
        _placeholder="멤버 이름을 ','을 기준으로 입력해주세요 ('가가,나나')"
        _margin="10px 0"
        _padding="12px 8px"
        _backgroundColor="blue_1"
        _borderRadius={5}
        setValue={setMembers}
      />
      <Div _gap={4} _margin="0 0 0 auto">
        <Button _width="fit-content" _padding="4px 8px" _onClick={addChat}>
          추가
        </Button>
        <Button _width="fit-content" _padding="4px 8px" _onClick={closeModal}>
          닫기
        </Button>
      </Div>
    </Modal>
  );
};
