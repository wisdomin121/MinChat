import { Div, ChatMemberItem } from 'components';
import { useChatStore } from 'stores';

export const ChatMemberContent = () => {
  const { nowChatId, chatInfo } = useChatStore();

  return (
    <Div _flexDirection="column">
      {chatInfo[nowChatId].chat_members.map((member) => {
        return <ChatMemberItem name={member} />;
      })}
    </Div>
  );
};
