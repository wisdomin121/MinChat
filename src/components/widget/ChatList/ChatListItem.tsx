import { convertISOStringToAMTime } from 'utils';
import { Div, Item, Label } from 'components';
import { useChatStore } from 'stores';

interface IChatListItem {
  chatId: string;
  chatTitle: string;
  chatLastMessage: string;
  chatLastTimestamp: string;
}

export const ChatListItem = ({
  chatId,
  chatTitle,
  chatLastMessage,
  chatLastTimestamp,
}: IChatListItem) => {
  const { nowChatId, setNowChatId } = useChatStore();

  const changeChatId = () => {
    if (nowChatId !== chatId) {
      setNowChatId(chatId);
    }
  };

  return (
    <Item isActive={chatId === nowChatId} _onClick={changeChatId}>
      <Div _maxWidth="70%" _flexDirection="column">
        <Label text={chatTitle} _fontSize="b2" _fontWeight="bold" />
        <Label text={chatLastMessage} _fontSize="b2" />
      </Div>

      <Label
        text={chatLastTimestamp && convertISOStringToAMTime(chatLastTimestamp)}
        _margin="0 0 0 auto"
        _color="gray_3"
        _fontSize="b3"
      />
    </Item>
  );
};
