import { useState } from 'react';

import { useChatStore } from 'stores';

import { Button, Div, Input } from 'components';
import Icon from 'assets';

export const ChatFooter = () => {
  const { nowChatId, chatInfo, addChatMessage } = useChatStore();
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    addChatMessage(nowChatId, {
      message_id: `message_${chatInfo[nowChatId].chat_messages.length}`,
      sender: {
        user_id: 'user_1',
        user_name: '민지',
      },
      message,
      timestamp: new Date().toString(),
    });
  };

  return (
    <Div>
      <Input
        _value={message}
        _width="100%"
        _margin="0 20px 30px 30px"
        _padding="12px 8px"
        _background_color="blue_1"
        _border_radius={10}
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
