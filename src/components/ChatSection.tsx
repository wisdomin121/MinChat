import Icon from 'assets';
import { Button, ChatItem, Div, Input, Label, Section } from 'components';

export const ChatSection = () => {
  return (
    <Section>
      <Div _align_items="center" _margin="30px 30px 0">
        <Label text="Family" _fontSize="h2" />

        <Div _gap={20} _margin="0 0 0 auto">
          <Icon.MemberIcon />
          <Icon.ExitIcon />
        </Div>
      </Div>

      <Div
        _flex_direction="column"
        _height="100%"
        _margin="20px 30px"
        _background_color="gray_1"
        _border_radius={10}
        _overflow="auto"
      >
        <ChatItem user_name="first" message="sdfsdf" time="PM 07:00" />
        <ChatItem user_name="first" message="sdfsdf" time="PM 07:00" />
        <ChatItem user_name="first" message="sdfsdf" time="PM 07:00" />
        <ChatItem user_name="first" message="sdfsdf" time="PM 07:00" />
        <ChatItem user_name="first" message="sdfsdf" time="PM 07:00" />
        <ChatItem user_name="first" message="sdfsdf" time="PM 07:00" />
        <ChatItem user_name="first" message="sdfsdf" time="PM 07:00" />
        <ChatItem user_name="first" message="sdfsdf" time="PM 07:00" />
        <ChatItem user_name="first" message="sdfsdf" time="PM 07:00" />
      </Div>

      <Div>
        <Input
          _width="100%"
          _margin="0 20px 30px 30px"
          _padding="12px 8px"
          _background_color="blue_1"
          _border_radius={10}
        />

        <Button
          _width="40px"
          _height="40px"
          _margin="0 30px 0 auto"
          _onClick={() => console.log('send button')}
        >
          <Icon.SendIcon />
        </Button>
      </Div>
    </Section>
  );
};
