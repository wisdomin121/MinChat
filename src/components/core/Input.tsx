import { ICommonComponent } from 'type';

import '../../App.css';
import './InputStyle.css';

interface IInput extends ICommonComponent {
  _value: string;
  _placeholder?: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  _onKeyDown?: () => void
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
  _onKeyDown
}: IInput) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (_onKeyDown && e.key === 'Enter') {
      _onKeyDown()
    }
  }

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
      onKeyDown={(e) => onKeyDown(e)}
    ></input>
  );
};
