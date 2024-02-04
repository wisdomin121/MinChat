import { ReactNode } from 'react';

import './ItemStyle.css';

interface IItem {
  children: ReactNode;
  isActive?: boolean;
  _onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export const Item = ({ children, isActive, _onClick }: IItem) => {
  return (
    <div className={`item ${isActive ? 'is-active' : ''}`} onClick={_onClick}>
      {children}
    </div>
  );
};
