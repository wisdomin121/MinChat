import { create } from 'zustand';

import type { IChat, IChatListData, IChatListDatas, IMessage } from 'type';

import chat_list_mock from '../datas/chat_list_mock.json';
import chat_mock from '../datas/chat_mock.json';

interface IChatStore {
  nowChatId: string;
  setNowChatId: (chatId: string) => void;

  chatListLength: number;
  setChatListLength: () => void;

  chatList: IChatListDatas;
  addChatList: (data: IChatListData) => void;
  updateChatLast: (chatLastMessage: string) => void;

  chatInfo: IChat;
  addChatMessage: (chatId: string, message: IMessage) => void;
  addChatInfo: (chatId: string, chatTitle: string) => void;
}

export const useChatStore = create<IChatStore>((set) => ({
  nowChatId: Object.keys(chat_list_mock.datas)[0],
  setNowChatId: (chatId) => set(() => ({ nowChatId: chatId })),

  chatListLength: chat_list_mock.length,
  setChatListLength: () =>
    set((state) => ({ chatListLength: state.chatListLength + 1 })),

  chatList: { ...chat_list_mock.datas },
  addChatList: (data) =>
    set((state) => ({
      chatList: {
        ...state.chatList,
        [data.chat_id]: data,
      },
    })),
  updateChatLast: (chatLastMessage: string) =>
    set((state) => ({
      chatList: {
        ...state.chatList,
        [state.nowChatId]: {
          ...state.chatList[state.nowChatId],
          chat_last_message: chatLastMessage,
          chat_last_time: new Date().toISOString(),
        },
      },
    })),

  chatInfo: chat_mock.datas,
  addChatMessage: (chatId, message) =>
    set((state) => {
      const chatInfoCopy = { ...state.chatInfo };
      chatInfoCopy[chatId].chat_messages.push(message);

      return { chatInfo: chatInfoCopy };
    }),
  addChatInfo: (chatId, chatTitle) =>
    set((state) => {
      const chatInfoCopy = { ...state.chatInfo };
      chatInfoCopy[chatId] = {
        chat_title: chatTitle,
        chat_members: [],
        chat_messages: [],
      };

      return { chatInfo: chatInfoCopy };
    }),
}));
