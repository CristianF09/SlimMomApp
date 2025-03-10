import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { BackBtn, Overlay } from '../DiaryModal/DiaryModal.styled';
import { DiaryAddProductForm } from '../../components/DiaryAddProductForm/DiaryAddProductForm';

const modalRoot = document.querySelector('#modal-root')

export const DiaryModal = ({onClose}) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
        window.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'auto';
    };
  });

const handleKeyDown = (e) => {
    if(e.code === 'Escape') {
        onClose()
    }
}

  return createPortal(
    <Overlay>
        <div>
            <BackBtn onClick={() => onClose()}>←</BackBtn>
            <DiaryAddProductForm onClose={onClose} />
        </div>
    </Overlay>,
    modalRoot
  )
}
