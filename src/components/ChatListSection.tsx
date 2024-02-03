import {
  Section,
  ChatListHeader,
  ChatListFooter,
  ChatListContent,
} from 'components';

export const ChatListSection = () => {
  return (
    <Section _width="35%">
      <ChatListHeader />
      <ChatListContent />
      <ChatListFooter />
    </Section>
  );
};
