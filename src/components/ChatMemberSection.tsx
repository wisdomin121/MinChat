import { Section, ChatMemberContent, ChatMemberHeader } from 'components';

export const ChatMemberSection = () => {
  return (
    <Section _width="25%">
      <ChatMemberHeader />
      <ChatMemberContent />
    </Section>
  );
};
