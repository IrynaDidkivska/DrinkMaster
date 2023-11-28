import PropTypes from 'prop-types';
import { useEffect, useRef, useCallback } from 'react';

import { EditProfile } from '../EditProfile/EditProfile';

import { PopUpWrapper, StyledUserPopup } from './UserLogoPopup.styled';

export const UserLogoPopup = ({ isOpen, togglePopup }) => {
  const popupRef = useRef(null);

  useEffect(() => {
    const handleEscape = event => {
      if (event.code === 'Escape') {
        togglePopup();
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, togglePopup]);

  const handleClickOutside = useCallback(
    event => {
      if (event.target === event.currentTarget) {
        togglePopup();
      }
    },
    [togglePopup]
  );

  return (
    <>
      {isOpen && (
        <>
          <PopUpWrapper onClick={handleClickOutside} />
          <StyledUserPopup ref={popupRef} data-testid="user-popup">
            <EditProfile togglePopup={togglePopup} />
          </StyledUserPopup>
        </>
      )}
    </>
  );
};

UserLogoPopup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  togglePopup: PropTypes.func.isRequired,
};
