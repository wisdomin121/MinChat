import { Div, Item, Label } from 'components';

interface IChatListItem {
  chat_id: string;
  chat_title: string;
  chat_last_message: string;
  chat_last_time: string;
}

export const ChatListItem = ({
  chat_id,
  chat_title,
  chat_last_message,
  chat_last_time,
}: IChatListItem) => {
  return (
    <Item _onClick={() => console.log(chat_id)}>
      <Div _flex_direction="column">
        <Label text={chat_title} _fontSize="b2" _fontWeight="bold" />
        <Label text={chat_last_message} _fontSize="b2" />
      </Div>

      <Label
        text={chat_last_time}
        _margin="0 0 0 auto"
        _color="gray_3"
        _fontSize="b3"
      />
    </Item>
  );
};
