
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../../redux/auth/operations';
import { Exit, Name, Section } from './UserInfo.styled';

import { ExitModal } from '../../ExitModal/ExitModal';

export const BottomSection = ({ name }) => {
  

  const body = document.querySelector('body');

  const [isModalOpened, setIsModalOpened] = useState(false);
  

  const onModalClose = () => {
    setIsModalOpened(!isModalOpened);
    body.style.overflow = 'auto';
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
    const body = document.querySelector('body');
    body.classList.remove('christmas');
    
  };

 
  return (
    <Section>
      {isModalOpened && (
        <ExitModal onClose={onModalClose} handleLogout={handleLogout} />
      )}
      <Name>{name}</Name>
      <Exit onClick={() => setIsModalOpened(!isModalOpened)}>Exit</Exit>
    
    </Section>
  );
};
