import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useState } from 'react';

import { selectUser } from '@/redux/Auth/selectors';
import { logoutThunk } from '@/redux/Auth/operations';

import { SpriteSVG } from '@/shared/icons/SpriteSVG';
import { UserInfoModal } from '../UserInfoModal/UserInfoModal';

import {
  StyledBtnEditProfile,
  StyledBtnLogOut,
  StyledPopupTitle,
} from './EditProfile.styled';

export const EditProfile = () => {
  const dispatch = useDispatch();
  const { username } = useSelector(selectUser);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutThunk())
      .unwrap()
      .then(() => {
        toast.success(`Goodbye ${username || ''}!`);
        navigate('/signin');
      });
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditProfileClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <StyledBtnEditProfile onClick={handleEditProfileClick}>
        <StyledPopupTitle>Edit profile</StyledPopupTitle>
        <SpriteSVG name="edit-01" />
      </StyledBtnEditProfile>

      <StyledBtnLogOut onClick={handleLogout}>Log out</StyledBtnLogOut>

      {isModalOpen && <UserInfoModal onClose={handleCloseModal} />}
    </>
  );
};

EditProfile.propTypes = {
  togglePopup: PropTypes.func.isRequired,
};
