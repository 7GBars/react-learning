import React, {PropsWithChildren} from 'react';
import ReactDOM from 'react-dom';

import './ModalPortal.scss';

type TModalProps = PropsWithChildren<{isOpen: boolean}>

const Modal = ({ children, isOpen }: TModalProps) => {
  const modalWrapper = <div className={'modal-wrapper'}>{children}</div>;

  const portal = isOpen
    ? ReactDOM.createPortal(
      modalWrapper,
      document.getElementById('portal-container')!)
    : null

  return portal
};

export default Modal;