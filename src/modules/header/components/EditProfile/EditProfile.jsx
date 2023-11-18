import PropTypes from 'prop-types';
import { SpriteSVG } from '../../../../shared/icons/SpriteSVG';
import {
  StyledBtnEditProfile,
  StyledBtnLogOut,
  StyledPopupHeader,
  StyledPopupTitle,
} from './EditProfile.styled';
import { useState } from 'react';
import { UserInfoModal } from '../UserInfoModal/UserInfoModal';

export const EditProfile = ({ togglePopup }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditProfileClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    togglePopup();
  };

  return (
    <>
      <StyledPopupHeader>
        <StyledPopupTitle>Edit profile</StyledPopupTitle>
        <StyledBtnEditProfile onClick={handleEditProfileClick}>
          <SpriteSVG name="edit-01" />
        </StyledBtnEditProfile>
      </StyledPopupHeader>

      <StyledBtnLogOut onClick={togglePopup}>Log out</StyledBtnLogOut>

      {isModalOpen && <UserInfoModal onClose={handleCloseModal} />}
    </>
  );
};

EditProfile.propTypes = {
  togglePopup: PropTypes.func.isRequired,
};
