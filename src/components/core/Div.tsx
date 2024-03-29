import React, { ReactNode } from 'react';

import { ICommonComponent } from 'type';

import '../../App.css';
import './DivStyle.css';

interface IDiv extends ICommonComponent {
  children: ReactNode;
}

export const Div = React.forwardRef(
  (
    {
      children,
      _flexDirection = 'row',
      _justifyContent,
      _alignItems,
      _gap = 0,
      _width,
      _maxWidth,
      _height,
      _margin,
      _padding,
      _backgroundColor,
      _borderRadius,
      _overflow,
    }: IDiv,
    ref?: React.Ref<HTMLDivElement>
  ) => {
    return (
      <div
        ref={ref}
        className={`div bg-color-${_backgroundColor}`}
        style={{
          flexDirection: _flexDirection,
          justifyContent: _justifyContent,
          alignItems: _alignItems,
          gap: `${_gap}px`,
          width: _width,
          maxWidth: _maxWidth,
          height: _height,
          margin: _margin,
          padding: _padding,
          borderRadius: `${_borderRadius}px`,
          overflow: _overflow,
        }}
      >
        {children}
      </div>
    );
  }
);
