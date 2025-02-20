import { RingLoader } from 'react-spinners';
import css from './LoaderNew.module.css';

// Must use default export
export const LoaderNew = () => {  // ← Keep this named export
  return (
    <div className={css.container}>
      <RingLoader color="#FFA500" size={100} />
    </div>
  );
};