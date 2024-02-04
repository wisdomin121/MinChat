export interface IChatListData {
  chat_title: string;
  chat_last_message: string;
  chat_last_time: string;
}

export interface IChatListDatas {
  [chat_id: string]: IChatListData;
}

export interface IChatList {
  max_number: number;
  datas: {
    [chat_id: string]: IChatListDatas;
  };
}
