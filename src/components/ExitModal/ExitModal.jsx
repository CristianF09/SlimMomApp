import { Button } from '../Button/Button'; // Fixed path
import { ButtonWrapper } from '../Form/Form.styled'; // Fixed path
import { ModalWindow, Overlay, InnerInfo } from '../Modal/Modal.styled';
import React from 'react';
import { createPortal } from 'react-dom';
import { useMediaQuery } from 'react-responsive';

const modalRoot = document.querySelector('#root');

export const ExitModal = ({ onClose, handleLogout }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 426px)' });

  const handleBackDropClick = e => {
    if (e.currentTarget === e.target) {
      onClose(false);
    }
  };
  
  return createPortal(
    <Overlay onClick={handleBackDropClick}>
      <ModalWindow
        style={
          isMobile ? {
            paddingTop: '30px',
            height: '90vh',
            transform: 'translate(-50%,-62%)',
          } : { paddingTop: '50px' }
        }
      >
        <InnerInfo>
          <h2 style={{ textAlign: 'center' }}>
            Are you sure you want to log out?
          </h2>
          <img
            src="https://tenor.com/view/i-cant-lose-weight-eric-cartman-south-park-s6e2-jared-has-aides-gif-22098219"
            alt="southpark"
            height={isMobile ? '300' : '400'}
          />
        </InnerInfo>
        <ButtonWrapper
          style={
            isMobile
              ? { display: 'flex', flexWrap: 'wrap', gap: '20px' }
              : { display: 'flex', gap: '20px', position: 'static' }
          }
        >
          <div onClick={onClose}>
            <Button full={true}>No</Button>
          </div>
          <div onClick={handleLogout}>
            <Button>Yes</Button>
          </div>
        </ButtonWrapper>
      </ModalWindow>
    </Overlay>,
    modalRoot
  );
};