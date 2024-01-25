import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import style from './modal.module.css';

const modalRoot = document.getElementById('modal-root');

const Modal = ({ close, img }) => {
  const closeModal = ({ target, currentTarget, code }) => {
    if (target === currentTarget || code === 'Escape') {
      close();
    }
  };

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') close();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [close]);

  return createPortal(
    <div onClick={closeModal} className={style.overlay}>
      <div className={style.modal}>
        <img src={img.largeImageURL} alt="" />
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
