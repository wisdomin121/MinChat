import { ReactNode } from 'react';

import {
  ColorType,
  FontSizeType,
  FontWeightType,
  ICommonComponent,
} from 'type';
import './LabelStyle.css';

interface ILabel extends ICommonComponent {
  text: string;
  icon?: ReactNode;
  _color?: ColorType;
  _fontSize?: FontSizeType;
  _fontWeight?: FontWeightType;
}

export const Label = ({
  text,
  icon,
  _margin = '0',
  _padding = '0',
  _color = 'black',
  _fontSize = 'b1',
  _fontWeight = 'normal',
}: ILabel) => {
  return (
    <div>
      {icon}

      <p
        className={`label color-${_color} fs-${_fontSize} fw-${_fontWeight}`}
        style={{ margin: _margin, padding: _padding }}
      >
        {text}
      </p>
    </div>
  );
};
