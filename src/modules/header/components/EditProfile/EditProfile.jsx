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

export const EditProfile = ({ togglePopup }) => {
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

  const handleOpenModal = () => {
    open();
  };

  const handleCloseModal = () => {
    close();
    togglePopup();
  };

  return (
    <>
      <StyledBtnEditProfile onClick={handleOpenModal}>
        <StyledPopupTitle>Edit profile</StyledPopupTitle>
        <SpriteSVG name="edit-01" />
      </StyledBtnEditProfile>

      <StyledBtnLogOut onClick={handleLogout}>Log out</StyledBtnLogOut>

      {isOpen && <UserInfoModal handleCloseModal={handleCloseModal} />}
    </>
  );
};

EditProfile.propTypes = {
  togglePopup: PropTypes.func.isRequired,
};
