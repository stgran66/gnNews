import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { BsGrid3X3Gap, BsListColumnsReverse } from 'react-icons/bs';
import { useIntl } from 'react-intl';

import { selectView } from 'state';
import { toggleView } from 'state';
import { useAppDispatch, useAppSelector } from 'hooks';
import { LanguageSwitcher } from 'components/LanguageSwitcher/LanguageSwitcher';

import { StyledHeader, StyledButton, StyledModal } from './Header.styled';

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
          defaultMessage: 'Click me',
        })}
      </StyledButton>
      <LanguageSwitcher />
      <StyledModal
        title={intl.formatMessage({
          id: 'project_sumup_title',
          defaultMessage: 'about gnNews',
        })}
        open={isModalOpen}
        onCancel={hideModal}
        closable
        footer={null}
      >
        <p>
          {intl.formatMessage({
            id: 'project_sumup',
          })}
        </p>
      </StyledModal>
    </StyledHeader>
  );
};
