import { Button, Div } from 'components';

export const ChatListFooter = () => {
  return (
    <Div _margin="auto 30px 30px">
      <Button
        _width="100%"
        _padding="12px 0"
        _onClick={() => console.log('채팅방 추가하기')}
      >
        채팅방 추가하기
      </Button>
    </Div>
  );
};
