import Icon from 'assets';
import { Div, Label, Section } from 'components';

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
        _height="100%"
        _margin="20px 30px"
        _background_color="gray_1"
        _border_radius={10}
      >
        asdasd
      </Div>
    </Section>
  );
};
