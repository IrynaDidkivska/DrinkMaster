import { getUser } from '../../../../redux/Auth/selectors';
import profileFoto from '../../images/profile-foto.png';
import {
  StyledBtnProfile,
  StyledImgProfile,
  StyledProfileName,
} from './EditProfile';
import { useSelector } from 'react-redux';

export const EditProfile = () => {
  const editString = name => {
    if (name) {
      const arrFromStr = name.split(' ');
      const res = arrFromStr.map(el => el[0].toUpperCase() + el.slice(1));
      return res.join(' ');
    }
  };

  const { email } = useSelector(getUser);

  return (
    <StyledBtnProfile>
      <StyledImgProfile src={profileFoto} alt="profile foto" />
      <StyledProfileName>{editString(email)}Victoria</StyledProfileName>
    </StyledBtnProfile>
  );
};
