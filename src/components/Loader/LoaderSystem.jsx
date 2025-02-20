import { LineLoader } from './LineLoader';
import { Loader } from './Loader';
import { LoaderNew } from '../LoaderNew/LoaderNew';
import { FlameLoader } from './FlameLoader';
import { LOADER_TYPES } from './loaderTypes';

export const LoaderSystem = ({ 
  type = LOADER_TYPES.FLAME,
  text = 'Loading',
  size = 100,
  color = '#FF3D00' // Default flame color
}) => {
  const loaderProps = {
    text,
    size,
    color: type === LOADER_TYPES.FLAME ? '#FF3D00' : color
  };

  switch(type) {
    case LOADER_TYPES.LINE:
      return <LineLoader {...loaderProps} />;
    case LOADER_TYPES.SPINNER:
      return <Loader {...loaderProps} />;
    case LOADER_TYPES.RING:
      return <LoaderNew {...loaderProps} />;
    case LOADER_TYPES.FLAME:
      return <FlameLoader text={text} />;
    default:
      return <FlameLoader text={text} />;
  }
};