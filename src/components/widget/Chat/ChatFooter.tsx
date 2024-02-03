import { Button, Div, Input } from 'components';
import Icon from 'assets';

export const ChatFooter = () => {
  return (
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
  );
};
