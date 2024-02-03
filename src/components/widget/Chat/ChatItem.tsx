import { Div, Label } from 'components/core';

const cookie_user_id = 'user_1';

interface IChatItem {
  user_id: string;
  user_name: string;
  message: string;
  time: string;
}

export const ChatItem = ({ user_id, user_name, message, time }: IChatItem) => {
  return (
    <Div _flex_direction="column" _width="calc(100% - 40px)" _padding="20px">
      <Div
        _margin={user_id === cookie_user_id ? '0 0 0 auto' : '0'}
        _align_items="center"
        _gap={10}
      >
        {user_id === cookie_user_id && <Label text={time} _fontSize="b3" />}
        <Label text={user_name} _fontWeight="bold" />
        {user_id !== cookie_user_id && <Label text={time} _fontSize="b3" />}
      </Div>

      <Div
        _width="fit-content"
        _margin={user_id === cookie_user_id ? '4px 20px 4px auto' : '4px 20px'}
        _padding="4px 8px"
        _background_color={user_id !== cookie_user_id ? 'logo' : 'white'}
        _border_radius={5}
      >
        <Label
          text={message}
          _color={user_id !== cookie_user_id ? 'white' : 'black'}
        />
      </Div>
    </Div>
  );
};
