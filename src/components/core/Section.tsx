import { ReactNode } from 'react';
import { ICommonComponent } from 'type';
import './SectionStyle.css';

interface ISection extends ICommonComponent {
  children: ReactNode;
}

export const Section = ({ _width = '100%', _padding, children }: ISection) => {
  return (
    <div className="section" style={{ width: _width, padding: _padding }}>
      {children}
    </div>
  );
};
