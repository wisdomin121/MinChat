import { ReactNode } from 'react';

import './Div.css';

interface IDiv {
  children: ReactNode;
  _flex_direction?: 'row' | 'column';
  _gap?: number;
}

export const Div = ({ children, _flex_direction = 'row', _gap = 0 }: IDiv) => {
  return (
    <div
      className="div"
      style={{ flexDirection: _flex_direction, gap: `${_gap}px` }}
    >
      {children}
    </div>
  );
};
