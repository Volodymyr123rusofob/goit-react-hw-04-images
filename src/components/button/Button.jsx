import style from './button.module.css';

const Button = ({ onClick, type = 'submit', children }) => {
  return (
    <button onClick={onClick} className={style.button} type={type}>
      {children}
    </button>
  );
};

export default Button;
