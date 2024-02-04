import { useState } from 'react';

import { useChatStore } from 'stores';
import { Button, Div, Input } from 'components';
import { getCookie } from 'utils';
import Icon from 'assets';

export const ChatFooter = () => {
  const [message, setMessage] = useState('');
  const {
    nowChatId,
    chatInfo,
    addChatMessage,
    updateChatLast,
    setChatMessageLength,
  } = useChatStore();

  const sendMessage = () => {
    if (message === '') {
      alert('메세지를 입력해주세요.');
      return;
    }

    updateChatLast(message);
    addChatMessage(nowChatId, {
      message_id: `message_${chatInfo[nowChatId].chat_message_length + 1}`,
      sender: JSON.parse(getCookie('user')),
      message,
      timestamp: new Date().toISOString(),
    });
    setChatMessageLength();

    setMessage('');
  };

  return (
    <Div>
      <Input
        _value={message}
        _width="100%"
        _margin="0 20px 30px 30px"
        _padding="12px 8px"
        _backgroundColor="blue_1"
        _borderRadius={10}
        setValue={setMessage}
      />

      <Button
        _width="40px"
        _height="40px"
        _margin="0 30px 0 auto"
        _onClick={sendMessage}
      >
        <Icon.SendIcon />
      </Button>
    </Div>
  );
};
