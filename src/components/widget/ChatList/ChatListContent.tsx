import { ChatListItem, Div, Label } from 'components';
import { useChatStore } from 'stores';

export const ChatListContent = () => {
  const { chatList } = useChatStore();

  return (
    <Div _flex_direction="column">
      <Label
        text="All Message"
        _margin="40px 0 16px"
        _padding="0 0 0 30px"
        _color="gray_3"
      />

      <Div _flex_direction="column" _overflow="auto">
        {Object.values(chatList).map(
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
