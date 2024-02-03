import { ColorType, ICommonComponent } from 'type';

import './ButtonStyle.css';
import { ReactNode } from 'react';

interface IButton extends ICommonComponent {
  children: ReactNode;
  _backgroundColor?: ColorType;
  _onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({
  children,
  _backgroundColor = 'logo',
  _margin,
  _padding,
  _onClick,
}: IButton) => {
  return (
    <button
      className={`button bg-color-${_backgroundColor}`}
      style={{ margin: _margin, padding: _padding }}
      onClick={_onClick}
    >
      {children}
    </button>
  );
};
