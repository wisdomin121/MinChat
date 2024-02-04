export interface IChatListData {
  chat_id: string;
  chat_title: string;
  chat_last_message: string;
  chat_last_time: string;
}

export interface IChatList {
  max_number: number;
  datas: IChatListData[];
}
