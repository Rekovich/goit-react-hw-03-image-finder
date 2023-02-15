import { Vortex } from 'react-loader-spinner';
import css from './loader.module.css';


export const Loader = () => {
  return (
    <div className={css.Loader}>
      <Vortex
        visible={true}
        height="80"
        width="80"
        ariaLabel="vortex-loading"
        // wrapperStyle={{}}
        // wrapperClass="vortex-wrapper"
        colors={['blue', 'yellow', 'blue', 'yellow', 'yellow', 'blue']}
      />
    </div>
  );
};
