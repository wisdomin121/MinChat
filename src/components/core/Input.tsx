import { ColorType, ICommonComponent } from 'type';
import './InputStyle.css';

interface IInput extends ICommonComponent {
  _background_color?: ColorType;
  _border_radius?: number;
}

export const Input = ({
  _width,
  _height,
  _margin,
  _padding,
  _background_color,
  _border_radius,
}: IInput) => {
  return (
    <input
      className={`input bg-color-${_background_color}`}
      style={{
        width: _width,
        height: _height,
        margin: _margin,
        padding: _padding,
        borderRadius: `${_border_radius}px`,
      }}
    ></input>
  );
};
