import { useCallback, useEffect, useRef, useState } from 'react';
import { selectUser } from '../../../../redux/Auth/selectors';
import userFoto from '../../images/user.png';
import {
  StyledBtnProfile,
  StyledImgProfile,
  StyledProfileName,
} from './User.styled';
import { useSelector } from 'react-redux';
import ReactDOM from 'react-dom';

import { UserLogoPopup } from '../UserLogoPopup/UserLogoPopup';

export const User = () => {
  const [isOpen, setIsOpen] = useState(false);
  const portalRoot = document.getElementById('portal-root');

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
      const insideButton =
        btnProfileRef.current && btnProfileRef.current.contains(event.target);
      // const insidePopup = popupRef.current.contains(event.target);

      console.log(portalRoot);

      // Если клик внутри кнопки, то просто открываем/закрываем попап
      if (insideButton) {
        togglePopup();
        return;
      }

      // Если клик снаружи и кнопки, закрываем попап
      if (!portalRoot.contains(event.target)) {
        closePopup();
      }
    };

    document.body.addEventListener('click', handleClickOutside);

    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, [closePopup, portalRoot, togglePopup]);

  return (
    <>
      <StyledBtnProfile ref={btnProfileRef}>
        {avatar ? (
          <StyledImgProfile src={avatar} alt="Foto" />
        ) : (
          <StyledImgProfile src={userFoto} alt="Default Foto" />
        )}
        <StyledProfileName>{editString(username)}</StyledProfileName>
      </StyledBtnProfile>

      {isOpen &&
        ReactDOM.createPortal(
          <UserLogoPopup
            ref={popupRef}
            data-testid="user-popup"
            isOpen={isOpen}
            togglePopup={togglePopup}
          />,
          portalRoot
        )}
    </>
  );
};
