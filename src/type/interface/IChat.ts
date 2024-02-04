export interface IMessage {
  message_id: string;
  sender: {
    user_id: string;
    user_name: string;
  };
  message: string;
  timestamp: string;
}

export interface IChat {
  [key: string]: {
    chat_title: string;
    chat_members: string[];
    chat_messages: IMessage[];
  };
}
