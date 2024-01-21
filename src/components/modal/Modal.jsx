import { Component } from 'react';
import { createPortal } from 'react-dom';

import style from './modal.module.css';

const modalRoot = document.getElementById('modal-root');

class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.closeModal);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.closeModal);
  }

  closeModal = ({ target, currentTarget, code }) => {
    if (target === currentTarget || code === 'Escape') {
      this.props.close();
    }
  };
  render() {
    const { closeModal } = this;
    const { children } = this.props;

    return createPortal(
      <div onClick={closeModal} className={style.overlay}>
        <div className={style.modal}>
          <img src={children.largeImageURL} alt="" />
        </div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;

//! під цим коментарем треба хуки
// import { useEffect } from 'react';
// import { createPortal } from 'react-dom';

// import style from './modal.module.css';

// const modalRoot = document.getElementById('modal-root');

// const Modal = () => {
//   useEffect(() => {
//     document.addEventListener('keydown', this.closeModal);
//   })

//   componentWillUnmount() {
//     document.removeEventListener('keydown', this.closeModal);
//   }

//   closeModal = ({ target, currentTarget, code }) => {
//     if (target === currentTarget || code === 'Escape') {
//       this.props.close();
//     }
//   };

//     return createPortal(
//       <div onClick={closeModal} className={style.overlay}>
//         <div className={style.modal}>
//           <img src={children.largeImageURL} alt="" />
//         </div>
//       </div>,
//       modalRoot
//     );
//   }

// export default Modal;
