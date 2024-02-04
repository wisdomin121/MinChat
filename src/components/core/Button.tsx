import { ReactNode } from 'react';

import { ColorType, ICommonComponent } from 'type';

import '../../App.css';
import './ButtonStyle.css';

interface IButton extends ICommonComponent {
  children: ReactNode;
  _backgroundColor?: ColorType;
  _onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({
  children,
  _backgroundColor = 'logo',
  _width,
  _height,
  _margin,
  _padding,
  _onClick,
}: IButton) => {
  return (
    <button
      className={`button bg-color-${_backgroundColor}`}
      style={{
        width: _width,
        height: _height,
        margin: _margin,
        padding: _padding,
      }}
      onClick={_onClick}
    >
      {children}
    </button>
  );
};
