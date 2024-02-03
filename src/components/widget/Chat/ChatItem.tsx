import { Div, Label } from 'components/core';

interface IChatItem {
  user_name: string;
  message: string;
  time: string;
}

export const ChatItem = ({ user_name, message, time }: IChatItem) => {
  return (
    <Div _flex_direction="column" _width="calc(100% - 40px)" _padding="20px">
      <Div _margin="0 0 0 auto" _align_items="center" _gap={10}>
        <Label text={time} _fontSize="b3" />
        <Label text={user_name} _fontWeight="bold" />
      </Div>

      <Div
        _width="fit-content"
        _margin="4px 20px 4px auto"
        _padding="4px 8px"
        _background_color="logo"
        _border_radius={5}
      >
        <Label text={message} _color="white" />
      </Div>
    </Div>
  );
};

{
  /* <Div _flex_direction="column" _width="calc(100% - 40px)" _padding="20px">
<Div _align_items="center" _gap={10}>
  <Label text={user_name} _fontWeight="bold" />
  <Label text={time} _fontSize="b3" />
</Div>

<Div
  _width="fit-content"
  _margin="4px 20px"
  _padding="4px 8px"
  _background_color="white"
  _border_radius={5}
>
  <Label text={message} />
</Div>
</Div> */
}
