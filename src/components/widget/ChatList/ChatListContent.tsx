import { ChatListItem, Div, Label } from 'components';
import chat_list_mock from '../../../datas/chat_list_mock.json';
import { useState } from 'react';

export const ChatListContent = () => {
  // TODO: 추후 store로 변경
  const [chatList, setChatList] = useState(chat_list_mock.datas);

  return (
    <Div _flex_direction="column">
      <Label
        text="All Message"
        _margin="40px 0 16px"
        _padding="0 0 0 30px"
        _color="gray_3"
      />

      <Div _flex_direction="column" _overflow="auto">
        {chatList.map(
          ({ chat_id, chat_title, chat_last_message, chat_last_time }) => {
            return (
              <ChatListItem
                key={chat_id}
                chat_id={chat_id}
                chat_title={chat_title}
                chat_last_message={chat_last_message}
                chat_last_time={chat_last_time}
              />
            );
          }
        )}
      </Div>
    </Div>
  );
};
