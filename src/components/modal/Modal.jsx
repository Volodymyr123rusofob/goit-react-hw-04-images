import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import style from './modal.module.css';

const modalRoot = document.getElementById('modal-root');

const Modal = ({ close, img }) => {
  useEffect(() => {
    document.addEventListener('keydown', closeModal);
    return () => {
      document.removeEventListener('keydown', closeModal);
    };
  }, []);

  const closeModal = ({ target, currentTarget, code }) => {
    if (target === currentTarget || code === 'Escape') {
      close();
    }
  };
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
