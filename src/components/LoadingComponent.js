import React, { useEffect, useReducer } from 'react';
import styled, { keyframes } from 'styled-components';

// Corrected rotation animation starting from upward position
const rotate = keyframes`
  from {
    transform: rotate(90deg);
  }
  to {
    transform: rotate(450deg);
  }
`;

// Unified Loader and Theme Container
const LoaderWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  background-color: ${({ isLoading }) => 
    isLoading ? "#FFF3E0" : "#ffffff"};
  display: flex;
  justify-content: center;
  align-items: center; /* Always center content */
  transition: background-color 0.5s ease-in-out;
`;

// Arrow Container
const ArrowContainer = styled.div`
  display: ${({ isLoading }) => (isLoading ? "block" : "none")};
  animation: ${rotate} 1s linear infinite;
`;

// Improved arrow sizing with fixed units
const Arrow = styled.div`
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-bottom: 40px solid #f57c00;
`;

// Main Loading Component
const LoadingComponent = ({ children }) => {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "SHOW_LOADER": return { ...state, isLoading: true };
        case "HIDE_LOADER": return { ...state, isLoading: false };
        default: return state;
      }
    },
    { isLoading: true }
  );

  useEffect(() => {
    dispatch({ type: "SHOW_LOADER" });
    const timer = setTimeout(() => dispatch({ type: "HIDE_LOADER" }), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <LoaderWrapper isLoading={state.isLoading}>
      <ArrowContainer isLoading={state.isLoading}>
        <Arrow />
      </ArrowContainer>

      {/* Always render children but control visibility */}
      <div style={{ display: state.isLoading ? 'none' : 'block', padding: '20px' }}>
        {children}
      </div>
    </LoaderWrapper>
  );
};

export default LoadingComponent;