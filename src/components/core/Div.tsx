import { ReactNode } from 'react';
import { ColorType, ICommonComponent } from 'type';

import './DivStyle.css';

interface IDiv extends ICommonComponent {
  children: ReactNode;
  _flex_direction?: 'row' | 'column';
  _justify_content?: 'center';
  _align_items?: 'center';
  _gap?: number;
  _background_color?: ColorType;
  _border_radius?: number;
}

export const Div = ({
  children,
  _flex_direction = 'row',
  _justify_content,
  _align_items,
  _gap = 0,
  _width,
  _height,
  _margin,
  _padding,
  _background_color,
  _border_radius,
}: IDiv) => {
  return (
    <div
      className={`div bg-color-${_background_color}`}
      style={{
        flexDirection: _flex_direction,
        justifyContent: _justify_content,
        alignItems: _align_items,
        gap: `${_gap}px`,
        width: _width,
        height: _height,
        margin: _margin,
        padding: _padding,
        borderRadius: `${_border_radius}px`,
      }}
    >
      {children}
    </div>
  );
};
