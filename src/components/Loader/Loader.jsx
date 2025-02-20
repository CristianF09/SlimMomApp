import { ThemeContext } from '../Context/Context';
import React, { useContext } from 'react';
import { ThreeCircles } from 'react-loader-spinner';
import { LoaderWrapper, MainLoader } from './Loader.styled';

// Add prop types
export const Loader = ({ size = 120, color }) => {
  const { theme } = useContext(ThemeContext);
  const loaderColor = color || (theme.isChristmas ? '#D6001C' : '#FC842D');

  return (
    <MainLoader>
      <LoaderWrapper>
        <ThreeCircles
          color={loaderColor}
          height={size}
          width={size}
          visible={true}
          ariaLabel="three-circles-rotating"
        />
      </LoaderWrapper>
    </MainLoader>
  );
};