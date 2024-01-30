import type { IChatItem } from 'type';
import { convertISOStringToAMTime } from 'utils';

export const ChatItem = ({
  chat_id,
  chat_title,
  last_message,
  last_message_time,
}: IChatItem) => {
  return (
    <div className="chat-item flex flex-center">
      <div className="profile-image" />

      <div className="ml-10">
        <p className="font-size-b2 font-weight-bold">{chat_title}</p>
        <p className="font-size-b2">{last_message}</p>
      </div>

      <p className="font-size-b3 flex-item-right">
        {convertISOStringToAMTime(last_message_time)}
      </p>
    </div>
  );
};
