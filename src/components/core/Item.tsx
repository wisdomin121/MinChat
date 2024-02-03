import { ReactNode } from 'react';

import './Item.css';

interface IItem {
  children: ReactNode;
}

export const Item = ({ children }: IItem) => {
  return <div className="item">{children}</div>;
};
