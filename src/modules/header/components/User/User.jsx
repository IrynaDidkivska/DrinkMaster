import { useState } from 'react';

import { selectUser } from '../../../../redux/Auth/selectors';
import { useSelector } from 'react-redux';

import { UserLogoPopup } from '../UserLogoPopup/UserLogoPopup';
import userFoto from '../../images/user.png';

import {
  StyledBtnProfile,
  StyledImgProfile,
  StyledProfileName,
} from './User.styled';

export const User = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { username, avatar } = useSelector(selectUser);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const editString = name => {
    if (name) {
      const arrFromStr = name.split(' ');
      const res = arrFromStr.map(el => el[0].toUpperCase() + el.slice(1));
      return res.join(' ');
    }
  };

  return (
    <>
      <StyledBtnProfile onClick={togglePopup}>
        {(avatar && <StyledImgProfile src={avatar} alt="Foto" />) || (
          <StyledImgProfile src={userFoto} alt="Default Foto" />
        )}

        <StyledProfileName>{editString(username)}</StyledProfileName>
      </StyledBtnProfile>
      <UserLogoPopup isOpen={isOpen} togglePopup={togglePopup} />
    </>
  );
};
