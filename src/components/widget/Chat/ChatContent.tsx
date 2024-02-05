import React, { useEffect, useRef } from 'react';

import { ChatItem, Div } from 'components';
import { useChatStore } from 'stores';

export const ChatContent = () => {
  const { nowChatId, chatInfo } = useChatStore();
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      contentRef.current &&
      contentRef.current.scrollHeight > contentRef.current.clientHeight
    ) {
      contentRef.current.scrollTop = contentRef.current.scrollHeight;
    }
  }, [nowChatId, chatInfo]);

  return (
    <Div
      ref={contentRef}
      _flexDirection="column"
      _height="100%"
      _margin="20px 30px"
      _backgroundColor="gray_1"
      _borderRadius={10}
      _overflow="auto"
    >
      {chatInfo[nowChatId]?.chat_messages.map(
        ({
          message_id,
          sender: { user_id, user_name },
          message,
          timestamp,
        }) => {
          return (
            <ChatItem
              key={message_id}
              userId={user_id}
              userName={user_name}
              message={message}
              timestamp={timestamp}
            />
          );
        }
      )}
    </Div>
  );
};
