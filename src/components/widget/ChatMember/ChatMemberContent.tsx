import { Div, ChatMemberItem } from 'components';
import { useChatStore } from 'stores';

export const ChatMemberContent = () => {
  const { nowChatId, chatInfo } = useChatStore();

  return (
    <Div _flexDirection="column">
      {chatInfo[nowChatId] &&
        chatInfo[nowChatId].chat_members.map((member, idx) => {
          return <ChatMemberItem key={idx} name={member} />;
        })}
    </Div>
  );
};
