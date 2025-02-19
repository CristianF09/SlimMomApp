import React from 'react';
import { Nav, StyledLink } from './Navigation.styled';

export const Menu = ({ setOpenNavigation }) => {
  const handleClick = () => {
    setOpenNavigation(false);
  };

  return (
    <Nav>
      <StyledLink to="diary" onClick={handleClick} activeClassName="active">
        Diary
      </StyledLink>
      <StyledLink to="calculator" onClick={handleClick} activeClassName="active">
        Calculator
      </StyledLink>
    </Nav>
  );
};