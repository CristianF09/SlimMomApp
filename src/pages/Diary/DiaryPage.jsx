import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Box } from '../../components/Box';
import DiaryProductList from '../../components/DiaryProductList/DiaryProductList';
import { DiaryAddProductForm } from '../../components/DiaryAddProductForm/DiaryAddProductForm';
import { DiaryDateCalendar } from '../../components/DiaryDateCalendar/DiaryDateCalendar';
import { RightSideBar } from '../../components/RightSideBar/RightSideBar';
import { DiaryModal } from '../../components/DiaryModal/DiaryModal';
import { Button } from '../../components/DiaryPage/DiaryPage.styled';
import AddIcon from '../../images/svg/add.svg';
import {
  Wrapper,
  WrapperAll,
} from '../../components/DiaryPage/DiaryPage.styled';

const body = document.querySelector('body');

const DiaryPage = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const mobile = useMediaQuery({ query: '(max-width: 426px)' });

  const onModalOpen = () => {
    setIsModalOpened(true);
    body.style.overflow = 'hidden';
  };

  const onModalClose = () => {
    setIsModalOpened(isModalOpened => !isModalOpened);
    body.style.overflow = 'auto';
  };

  return (
    <WrapperAll>
      <Wrapper>
        <DiaryDateCalendar />
        {!mobile && <DiaryAddProductForm />}
        <Box style={{ textAlign: 'center' }}>
          <DiaryProductList />
          {mobile && (
            <Button onClick={() => onModalOpen()}>
              <img src={AddIcon} alt="add product" />
            </Button>
          )}
        </Box>
        {isModalOpened && <DiaryModal onClose={onModalClose} />}
      </Wrapper>
      <RightSideBar />
    </WrapperAll>
  );
};

export default DiaryPage;