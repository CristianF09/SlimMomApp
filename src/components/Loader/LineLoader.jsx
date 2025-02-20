import styled, { keyframes } from 'styled-components';
import { ThemeContext } from '../Context/Context';
import React, { useContext } from 'react';

// Animation definition
const lineGrow = keyframes`
  to { 
    background-size: 100% auto;
  }
`;

// Styled components
const LoaderContainer = styled.div`
  font-size: 48px;
  color: ${({ theme }) => theme.colors.mainText};
  display: inline-block;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 400;
  position: relative;
  padding: 20px 0;
`;

const ProgressBar = styled.div`
  height: 6px;
  border: 1px solid ${({ theme }) => theme.colors.accent};
  border-radius: 10px;
  width: 100%;
  position: absolute;
  bottom: 0;
  background: linear-gradient(
    ${({ theme }) => theme.colors.accent} 100%,
    transparent 0
  ) no-repeat;
  background-size: 0% auto;
  animation: ${lineGrow} 10s linear infinite;
`;

export const LineLoader = ({ text = 'Loading' }) => {
  const { theme } = useContext(ThemeContext);
  
  return (
    <LoaderContainer theme={theme}>
      {text}
      <ProgressBar theme={theme} />
    </LoaderContainer>
  );
};