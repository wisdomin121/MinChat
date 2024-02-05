import { create } from 'zustand';

import type { IChat, IChatListData, IChatListDatas, IMessage } from 'type';
import { getCookie } from 'utils';

import chat_list_mock from '../datas/chat_list_mock.json';
import chat_mock from '../datas/chat_mock.json';

interface IChatStore {
  nowChatId: string;
  setNowChatId: (chatId: string) => void;

  chatListLength: number;
  setChatListLength: () => void;

  setChatMessageLength: () => void;

  chatList: IChatListDatas;
  addChatList: (chatId: string, data: IChatListData) => void;
  updateChatLast: (chatLastMessage: string) => void;

  chatInfo: IChat;
  addChatMessage: (message: string) => void;
  addChatInfo: (chatId: string, chatTitle: string, members: string) => void;

  deleteChat: () => void;
}

export const useChatStore = create<IChatStore>((set) => ({
  nowChatId: Object.keys(chat_list_mock.datas)[0],
  setNowChatId: (chatId) => set(() => ({ nowChatId: chatId })),

  chatListLength: chat_list_mock.length,
  setChatListLength: () =>
    set((state) => ({ chatListLength: state.chatListLength + 1 })),

  setChatMessageLength: () =>
    set((state) => ({
      chatInfo: {
        ...state.chatInfo,
        [state.nowChatId]: {
          ...state.chatInfo[state.nowChatId],
          chat_message_length:
            state.chatInfo[state.nowChatId].chat_message_length + 1,
        },
      },
    })),

  chatList: { ...chat_list_mock.datas },
  addChatList: (chatId, data) =>
    set((state) => {
      const newChatList = { ...state.chatList, [chatId]: data };

      return { chatList: newChatList };
    }),
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
  addChatMessage: (message) =>
    set((state) => {
      const chatInfoCopy = { ...state.chatInfo };
      const newMessage = {
        message_id: `message_${state.chatInfo[state.nowChatId].chat_message_length + 1}`,
        sender: JSON.parse(getCookie('user')),
        message,
        timestamp: new Date().toISOString()
      }

      const newMessages = [...chatInfoCopy[state.nowChatId].chat_messages, newMessage];

      chatInfoCopy[state.nowChatId] = {
        ...chatInfoCopy[state.nowChatId],
        chat_messages: newMessages,
        chat_message_length: newMessages.length,
      };

      return { chatInfo: chatInfoCopy };
    }),
  addChatInfo: (chatId, chatTitle, members) =>
    set((state) => {
      const chatInfoCopy = { ...state.chatInfo };
      const membersArr = members.split(',');
      const { user_name } = JSON.parse(getCookie('user'));

      chatInfoCopy[chatId] = {
        chat_title: chatTitle,
        chat_members: [user_name, ...membersArr],
        chat_message_length: 0,
        chat_messages: [],
      };

      return { chatInfo: chatInfoCopy };
    }),

  deleteChat: () =>
    set((state) => {
      const chatInfoCopy = { ...state.chatInfo };
      delete chatInfoCopy[state.nowChatId];

      const chatListCopy = { ...state.chatList };
      delete chatListCopy[state.nowChatId];

      return {
        nowChatId: Object.keys(chatListCopy)[0],
        chatInfo: chatInfoCopy,
        chatList: chatListCopy,
      };
    }),
}));
