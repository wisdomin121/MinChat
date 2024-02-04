import { Div, Label } from 'components/core';
import { convertISOStringToAMTime, getCookie } from 'utils';

interface IChatItem {
  user_id: string;
  user_name: string;
  message: string;
  timestamp: string;
}

export const ChatItem = ({
  user_id,
  user_name,
  message,
  timestamp,
}: IChatItem) => {
  const user = JSON.parse(getCookie('user'));

  return (
    <Div _flex_direction="column" _width="calc(100% - 40px)" _padding="20px">
      <Div
        _margin={user_id === user.user_id ? '0 0 0 auto' : '0'}
        _align_items="center"
        _gap={10}
      >
        {user_id === user.user_id && (
          <Label text={convertISOStringToAMTime(timestamp)} _fontSize="b3" />
        )}
        <Label text={user_name} _fontWeight="bold" />
        {user_id !== user.user_id && (
          <Label text={convertISOStringToAMTime(timestamp)} _fontSize="b3" />
        )}
      </Div>

      <Div
        _width="fit-content"
        _margin={user_id === user.user_id ? '4px 20px 4px auto' : '4px 20px'}
        _padding="4px 8px"
        _background_color={user_id !== user.user_id ? 'logo' : 'white'}
        _border_radius={5}
      >
        <Label
          text={message}
          _color={user_id !== user.user_id ? 'white' : 'black'}
        />
      </Div>
    </Div>
  );
};
