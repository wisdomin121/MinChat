import React from 'react';
import { Section, ChatMemberContent, ChatMemberHeader } from 'components';

export const ChatMemberSection = React.memo(() => {
  return (
    <Section _width="25%">
      <ChatMemberHeader />
      <ChatMemberContent />
    </Section>
  );
});
