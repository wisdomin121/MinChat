import { ColorType, FontSizeType, FontWeightType } from "type";

export interface ICommonComponent {
  _flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  _justifyContent?: 'start' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  _alignItems?: 'center' | 'stretch' | 'start' | 'end';
  _gap?: number;
  _width?: string;
  _maxWidth?: string;
  _height?: string;
  _margin?: string;
  _padding?: string;
  _fontSize?: FontSizeType;
  _fontWeight?: FontWeightType;
  _color?: ColorType;
  _backgroundColor?: ColorType
  _borderRadius?: number;
  _overflow?: 'auto' | 'visible' | 'hidden' | 'clip' | 'scroll';
}
