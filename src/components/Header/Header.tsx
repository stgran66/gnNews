import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Modal } from 'antd';
import { BsGrid3X3Gap, BsListColumnsReverse } from 'react-icons/bs';
import { useIntl } from 'react-intl';

import { selectView } from 'state';
import { toggleView } from 'state';
import { useAppDispatch, useAppSelector } from 'hooks';
import { LanguageSwitcher } from 'components/LanguageSwitcher/LanguageSwitcher';

import { StyledHeader, StyledButton } from './Header.styled';

export const Header = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const isOnNewsPage = location.pathname.includes('country');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const currentView = useAppSelector(selectView);
  const intl = useIntl();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const hideModal = () => {
    setIsModalOpen(false);
  };

  return (
    <StyledHeader>
      {isOnNewsPage && (
        <StyledButton
          onClick={() => {
            dispatch(toggleView(currentView === 'list' ? 'grid' : 'list'));
          }}
        >
          {currentView === 'grid' ? (
            <BsGrid3X3Gap size='1.56vw' />
          ) : (
            <BsListColumnsReverse size='1.56vw' />
          )}
        </StyledButton>
      )}
      <StyledButton onClick={showModal}>
        {intl.formatMessage({
          id: 'popup_button',
          defaultMessage: 'Popup',
        })}
      </StyledButton>
      <LanguageSwitcher />
      <Modal
        title='about project'
        open={isModalOpen}
        onCancel={hideModal}
        closable
        footer={null}
      >
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo sit
          delectus maiores neque cum excepturi architecto facilis vel dolore
          modi.
        </p>
      </Modal>
    </StyledHeader>
  );
};
