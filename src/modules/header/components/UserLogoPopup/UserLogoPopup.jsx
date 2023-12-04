import PropTypes from 'prop-types';
import { forwardRef, useEffect } from 'react';

import { EditProfile } from '../EditProfile/EditProfile';

import { StyledUserPopup } from './UserLogoPopup.styled';

export const UserLogoPopup = forwardRef(({ togglePopup }, ref) => {
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
      <StyledUserPopup ref={ref}>
        <EditProfile togglePopup={togglePopup} />
      </StyledUserPopup>
    </>
  );
});

UserLogoPopup.displayName = 'UserLogoPopup';

UserLogoPopup.propTypes = {
  togglePopup: PropTypes.func.isRequired,
};
