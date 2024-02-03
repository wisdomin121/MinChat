import { useState } from 'react';

import { Label, Section, ChatListItem } from 'components';
import chat_list from '../datas/chat_list_mock.json';

export const ChatListSection = () => {
  // TODO: store로 관리할듯...?
  const [chatList, setChatList] = useState(chat_list.datas);

  return (
    <Section _width={35}>
      <Label
        text="MinChat"
        _padding="20px 0 0 30px"
        _color="logo"
        _fontSize="h1"
        _fontWeight="bold"
      />
      <Label
        text="All Message"
        _margin="40px 0 16px"
        _padding="0 0 0 30px"
        _color="gray_3"
      />

      {chatList.map(
        ({ chat_id, chat_title, chat_last_message, chat_last_time }) => {
          return (
            <ChatListItem
              key={chat_id}
              chat_title={chat_title}
              chat_last_message={chat_last_message}
              chat_last_time={chat_last_time}
            />
          );
        }
      )}
    </Section>
  );
};
