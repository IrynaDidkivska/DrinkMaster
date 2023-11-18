import PropTypes from 'prop-types';
import { EditProfile } from '../EditProfile/EditProfile';
import { StyledUserPopup } from './UserLogoPopup.styled';
import { useEffect } from 'react';

export const UserLogoPopup = ({ isOpen, togglePopup }) => {
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
  }, [togglePopup]);

  return (
    <>
      {isOpen && (
        <StyledUserPopup>
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
