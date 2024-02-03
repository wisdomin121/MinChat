import { ReactNode } from 'react';

import './Item.css';

interface IItem {
  children: ReactNode;
  _onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export const Item = ({ children, _onClick }: IItem) => {
  return (
    <div className="item" onClick={_onClick}>
      {children}
    </div>
  );
};
