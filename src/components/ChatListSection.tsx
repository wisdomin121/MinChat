import { Label, Section } from 'components';

export const ChatListSection = () => {
  return (
    <Section _width={35}>
      <Label
        text="MinChat"
        _padding="20px 0 0 30px"
        _color="logo"
        _fontSize="h1"
        _fontWeight="bold"
      />
      <Label
        text="All Message"
        _margin="40px 0 16px"
        _padding="0 0 0 30px"
        _color="gray_3"
      />
    </Section>
  );
};
