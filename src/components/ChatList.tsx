import Icon from 'assets';
import { ChatItem } from 'components/chatlist/ChatItem';
import chatListMock from '../datas/chatListMock.json';

export const ChatListComponent = () => {
  return (
    <div className="main-component">
      <h1 className="pt-20 pl-30 color-logo font-size-h1">MinChat</h1>

      <div className="flex flex-center g-5 mt-40 mb-16 pl-30">
        <Icon.MessageIcon />
        <p className="color-gray3 font-size-b1">All Message</p>
      </div>

      {chatListMock.props.map((prop) => {
        return (
          <ChatItem
            key={prop.chat_id}
            chat_id={prop.chat_id}
            chat_title={prop.chat_title}
            last_message={prop.last_message}
            last_message_time={prop.last_message_time}
          />
        );
      })}

      <button className="flex-item-bottom mr-30 mb-30 ml-30">
        채팅방 추가
      </button>
    </div>
  );
};
