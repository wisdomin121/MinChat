import { ColorType, ICommonComponent } from 'type';

import './InputStyle.css';

interface IInput extends ICommonComponent {
  _value: string;
  _placeholder?: string;
  _background_color?: ColorType;
  _border_radius?: number;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export const Input = ({
  _value,
  _placeholder,
  _width,
  _height,
  _margin,
  _padding,
  _background_color,
  _border_radius,
  setValue,
}: IInput) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <input
      value={_value}
      placeholder={_placeholder}
      className={`input bg-color-${_background_color}`}
      style={{
        width: _width,
        height: _height,
        margin: _margin,
        padding: _padding,
        borderRadius: `${_border_radius}px`,
      }}
      onChange={(e) => onChange(e)}
    ></input>
  );
};
