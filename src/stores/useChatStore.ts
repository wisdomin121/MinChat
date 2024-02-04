import { create } from 'zustand';

import chat_mock from '../datas/chat_mock.json';
import type { IChat, IMessage } from 'type';

interface IChatStore {
  nowChatId: string;
  setNowChatId: (chatId: string) => void;
  chatInfo: IChat;
  addChatMessage: (chatId: string, message: IMessage) => void;
}

export const useChatStore = create<IChatStore>((set) => ({
  nowChatId: 'chat_1',
  setNowChatId: (chatId: string) => set(() => ({ nowChatId: chatId })),
  chatInfo: chat_mock.datas,
  addChatMessage: (chatId: string, message: IMessage) =>
    set((state) => {
      const chatInfoCopy = { ...state.chatInfo };
      chatInfoCopy[chatId].chat_messages.push(message);
      return { chatInfo: chatInfoCopy };
    }),
}));
