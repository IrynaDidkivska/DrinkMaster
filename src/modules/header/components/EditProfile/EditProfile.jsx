import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { selectUser } from '@/redux/Auth/selectors';
import { logoutThunk } from '@/redux/Auth/operations';

import { useModal } from '@/hooks/useModal';
import { SpriteSVG } from '@/shared/icons/SpriteSVG';
import { UserInfoModal } from '../UserInfoModal/UserInfoModal';

import {
  StyledBtnEditProfile,
  StyledBtnLogOut,
  StyledPopupTitle,
} from './EditProfile.styled';

export const EditProfile = () => {
  const [isOpen, open, close] = useModal();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { username } = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logoutThunk())
      .unwrap()
      .then(() => {
        toast.success(`Goodbye ${username || ''}!`);
        navigate('/signin');
      });
  };

  const handleEditProfileClick = () => {
    open();
  };

  const handleCloseModal = () => {
    close();
  };

  return (
    <>
      <StyledBtnEditProfile onClick={handleEditProfileClick}>
        <StyledPopupTitle>Edit profile</StyledPopupTitle>
        <SpriteSVG name="edit-01" />
      </StyledBtnEditProfile>

      <StyledBtnLogOut onClick={handleLogout}>Log out</StyledBtnLogOut>

      {isOpen && <UserInfoModal onClose={handleCloseModal} />}
    </>
  );
};

EditProfile.propTypes = {
  togglePopup: PropTypes.func.isRequired,
};
