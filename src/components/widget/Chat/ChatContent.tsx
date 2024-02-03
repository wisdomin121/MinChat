import { ChatItem, Div } from 'components';
import chat_mock from '../../../datas/chat_mock.json';
import { useState } from 'react';

export const ChatContent = () => {
  const [chat, setChat] = useState(chat_mock.datas.chat_1);

  return (
    <Div
      _flex_direction="column"
      _height="100%"
      _margin="20px 30px"
      _background_color="gray_1"
      _border_radius={10}
      _overflow="auto"
    >
      {chat.chat_messages.map(
        ({
          message_id,
          sender: { user_id, user_name },
          message,
          timestamp,
        }) => {
          return (
            <ChatItem
              key={message_id}
              user_id={user_id}
              user_name={user_name}
              message={message}
              time={timestamp}
            />
          );
        }
      )}
    </Div>
  );
};
