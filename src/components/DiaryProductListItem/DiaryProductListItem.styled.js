import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #e0e0e0;
`;

export const Icon = styled.button`
  background: none;
  border: none;
  cursor: pointer;

  & svg {
    width: 16px;
    height: 16px;
    fill: red; /* Customize as needed */
  }
`;

export const List = styled.ul`
  @media (min-width: 426px) and (max-width: 1023px) {
    overflow-y: auto;
    height: 244px;
    max-width: 610px;
  }

  @media (min-width: 1024px) {
    width: 610px;
    overflow-y: auto;
    height: 244px;
  }

  &.hidden {
    overflow: hidden;
    height: 0;
  }

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: #c1c1c1;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #a0a0a0;
  }
`;

export const NoProductsContainer = styled.div`
  text-align: center;

  @media (min-width: 426px) {
    text-align: start;
  }

  & p {
    font-size: ${p => p.theme.fontSizes[1]};
    font-family: ${p => p.theme.fonts.body};

    @media (max-width: 425px) {
      padding: 20px 0 30px;
    }
  }

  & svg {
    transition: transform 0.3s ease-in-out;

    @media (max-width: 425px) {
      transform: rotate(180deg);
    }

    @media (min-width: 426px) {
      margin-left: 90px;
    }
  }
`;
