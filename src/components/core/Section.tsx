import { ReactNode } from 'react';
import './SectionStyle.css';

interface ISection {
  _width?: number; // % 기준
  children: ReactNode;
}

export const Section = ({ _width = 100, children }: ISection) => {
  return (
    <div className="section" style={{ width: `${_width}%` }}>
      {children}
    </div>
  );
};
