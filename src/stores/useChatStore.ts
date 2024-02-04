import { create } from 'zustand';

import type { IChat, IChatListData, IMessage } from 'type';

import chat_list_mock from '../datas/chat_list_mock.json';
import chat_mock from '../datas/chat_mock.json';

interface IChatStore {
  nowChatId: string;
  setNowChatId: (chatId: string) => void;

  maxNumber: number;
  setMaxNumber: () => void;

  chatList: IChatListData[];
  addChatList: (data: IChatListData) => void;

  chatInfo: IChat;
  addChatMessage: (chatId: string, message: IMessage) => void;
}

export const useChatStore = create<IChatStore>((set) => ({
  // 현재 화면에 나타나는 대화창을 구성하기 위함
  nowChatId: chat_list_mock.datas[0].chat_id,
  setNowChatId: (chatId) => set(() => ({ nowChatId: chatId })),

  maxNumber: chat_list_mock.max_number,
  setMaxNumber: () => set((state) => ({ maxNumber: state.maxNumber + 1 })),

  chatList: chat_list_mock.datas,
  addChatList: (data) =>
    set((state) => ({
      chatList: [...state.chatList, data],
    })),

  chatInfo: chat_mock.datas,
  addChatMessage: (chatId, message) =>
    set((state) => {
      const chatInfoCopy = { ...state.chatInfo };
      chatInfoCopy[chatId].chat_messages.push(message);
      return { chatInfo: chatInfoCopy };
    }),
}));
