import { convertISOStringToAMTime, getCookie } from 'utils';
import { Div, Label } from 'components';

interface IChatItem {
  userId: string;
  userName: string;
  message: string;
  timestamp: string;
}

export const ChatItem = ({
  userId,
  userName,
  message,
  timestamp,
}: IChatItem) => {
  const user = JSON.parse(getCookie('user'));

  return (
    <Div _flexDirection="column" _width="calc(100% - 40px)" _padding="20px">
      <Div
        _margin={userId === user.user_id ? '0 0 0 auto' : '0'}
        _alignItems="center"
        _gap={10}
      >
        {userId === user.user_id && (
          <Label text={convertISOStringToAMTime(timestamp)} _fontSize="b3" />
        )}
        <Label text={userName} _fontWeight="bold" />
        {userId !== user.user_id && (
          <Label text={convertISOStringToAMTime(timestamp)} _fontSize="b3" />
        )}
      </Div>

      <Div
        _width="fit-content"
        _maxWidth="280px"
        _margin={userId === user.user_id ? '4px 20px 4px auto' : '4px 20px'}
        _padding="4px 8px"
        _backgroundColor={userId !== user.user_id ? 'logo' : 'white'}
        _borderRadius={5}
      >
        <Label
          text={message}
          _color={userId !== user.user_id ? 'white' : 'black'}
        />
      </Div>
    </Div>
  );
};
