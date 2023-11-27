import PropTypes from 'prop-types';
import { EditProfile } from '../EditProfile/EditProfile';
import { StyledUserPopup } from './UserLogoPopup.styled';
import { useEffect, useRef, useCallback } from 'react';

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

  const handleClickOutside = useCallback(event => {
    if (popupRef.current === !popupRef.current.contains(event.target)) {
      // console.log(popupRef.current);
      // console.log(popupRef.current.contains(event.target));
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen, handleClickOutside]);

  return (
    <>
      {isOpen && (
        <StyledUserPopup ref={popupRef} data-testid="user-popup">
          <EditProfile togglePopup={togglePopup} />
        </StyledUserPopup>
      )}
    </>
  );
};

UserLogoPopup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  togglePopup: PropTypes.func.isRequired,
};
