import style from './loader.module.css';

import { Triangle } from 'react-loader-spinner';

const Loader = ({ loading }) => {
  return (
    <div className={style.load}>
      <Triangle
        visible={loading}
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
