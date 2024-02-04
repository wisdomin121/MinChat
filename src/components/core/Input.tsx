import { ColorType, ICommonComponent } from 'type';

import './InputStyle.css';

interface IInput extends ICommonComponent {
  _value: string;
  _placeholder?: string;
  _backgroundColor?: ColorType;
  _borderRadius?: number;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export const Input = ({
  _value,
  _placeholder,
  _width,
  _height,
  _margin,
  _padding,
  _backgroundColor,
  _borderRadius,
  setValue,
}: IInput) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <input
      value={_value}
      placeholder={_placeholder}
      className={`input bg-color-${_backgroundColor}`}
      style={{
        width: _width,
        height: _height,
        margin: _margin,
        padding: _padding,
        borderRadius: `${_borderRadius}px`,
      }}
      onChange={(e) => onChange(e)}
    ></input>
  );
};
