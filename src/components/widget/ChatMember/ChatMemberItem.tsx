import { Item, Label } from 'components';

interface IChatMemberItem {
  name: string;
}

export const ChatMemberItem = ({ name }: IChatMemberItem) => {
  return (
    <Item>
      <Label text={name} _width="100%" />
    </Item>
  );
};
