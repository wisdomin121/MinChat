import { Div, Label } from 'components';
import Icon from 'assets';

export const ChatHeader = () => {
  return (
    <Div _align_items="center" _margin="30px 30px 0">
      <Label text="Family" _fontSize="h2" _fontWeight="bold" />

      <Div _gap={20} _margin="0 0 0 auto">
        <Icon.MemberIcon />
        <Icon.ExitIcon />
      </Div>
    </Div>
  );
};
