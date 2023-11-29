import { useCallback, useEffect, useRef, useState } from 'react';
import { selectUser } from '../../../../redux/Auth/selectors';
import userFoto from '../../images/user.png';
import {
  StyledBtnProfile,
  StyledImgProfile,
  StyledProfileName,
} from './User.styled';
import { useSelector } from 'react-redux';

import { UserLogoPopup } from '../UserLogoPopup/UserLogoPopup';

export const User = () => {
  const [isOpen, setIsOpen] = useState(false);

  const btnProfileRef = useRef(null);
  const popupRef = useRef(null);

  const { username, avatar } = useSelector(selectUser);

  const togglePopup = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const closePopup = useCallback(() => {
    setIsOpen(false);
  }, []);

  const editString = name => {
    if (name) {
      const arrFromStr = name.split(' ');
      const res = arrFromStr.map(el => el[0].toUpperCase() + el.slice(1));
      return res.join(' ');
    }
  };

  useEffect(() => {
    const handleClickOutside = event => {
      const insideButton = btnProfileRef.current.contains(event.target);
      const insidePopup =
        popupRef.current && popupRef.current.contains(event.target);
      // const insidePopup = event.target.closest('[data-testid="user-popup"]');

      if (!insideButton && !insidePopup) {
        closePopup();
      }
    };

    document.body.addEventListener('click', handleClickOutside);

    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, [closePopup, btnProfileRef, popupRef]);

  return (
    <>
      <StyledBtnProfile ref={btnProfileRef} onClick={togglePopup}>
        {avatar ? (
          <StyledImgProfile src={avatar} alt="Foto" />
        ) : (
          <StyledImgProfile src={userFoto} alt="Default Foto" />
        )}
        <StyledProfileName>{editString(username)}</StyledProfileName>

        {isOpen && (
          <UserLogoPopup
            ref={popupRef}
            data-testid="user-popup"
            isOpen={isOpen}
            togglePopup={togglePopup}
          />
        )}
      </StyledBtnProfile>
    </>
  );
};
