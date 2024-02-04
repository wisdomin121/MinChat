import { useChatStore } from 'stores';

import { Button, Div, Label } from 'components';
import Icon from 'assets';

export const ChatHeader = () => {
  const { nowChatId, chatInfo, deleteChat } = useChatStore();

  return (
    <Div _alignItems="center" _margin="30px 30px 0">
      <Label
        text={chatInfo[nowChatId].chat_title}
        _fontSize="h2"
        _fontWeight="bold"
      />

      <Div _gap={20} _margin="0 0 0 auto">
        <Button _backgroundColor="white" _onClick={() => console.log('member')}>
          <Icon.MemberIcon />
        </Button>
        <Button _backgroundColor="white" _onClick={deleteChat}>
          <Icon.ExitIcon />
        </Button>
      </Div>
    </Div>
  );
};
