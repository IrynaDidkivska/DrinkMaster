import profileFoto from '../../images/profile-foto.png';
import {
  StyledBtnProfile,
  StyledImgProfile,
  StyledProfileName,
} from './EditProfile';

export const EditProfile = () => {
  return (
    <StyledBtnProfile>
      <StyledImgProfile src={profileFoto} alt="profile foto" />
      <StyledProfileName>Victoria</StyledProfileName>
    </StyledBtnProfile>
  );
};
