import { ReactNode } from 'react';

import './ModalStyle.css';

interface IModal {
  children: ReactNode;
}

export const Modal = ({ children }: IModal) => {
  return (
    <div className="modal-background">
      <div className="modal">{children}</div>
    </div>
  );
};
