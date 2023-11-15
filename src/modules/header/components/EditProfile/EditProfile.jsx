import profileFoto from '../../images/profile-foto.png';
import { StyledBtnProfile, StyledProfileName } from './EditProfile';

const EditProfile = () => {
  return (
    <StyledBtnProfile>
      <img src={profileFoto} alt="profile foto" />
      <StyledProfileName>Victoria</StyledProfileName>
    </StyledBtnProfile>
  );
};

export default EditProfile;
