import { selectUser } from "../../../../redux/Auth/selectors";
import profileFoto from "../../images/profile-foto.png";
import {
  StyledBtnProfile,
  StyledImgProfile,
  StyledProfileName,
} from "./User.styled";
import { useDispatch, useSelector } from "react-redux";
import { UserLogoPopup } from "../UserLogoPopup/UserLogoPopup";
import { setModalUserOpen } from "../../../../redux/Global/globalSlice";
import { isModalUserOpen } from "../../../../redux/Global/selectors";

export const User = () => {
  const dispatch = useDispatch();
  const { username } = useSelector(selectUser);
  const isOpen = useSelector(isModalUserOpen);

  const togglePopup = () => {
    dispatch(setModalUserOpen(!isOpen));
  };

  const editString = (name) => {
    if (name) {
      const arrFromStr = name.split(" ");
      const res = arrFromStr.map((el) => el[0].toUpperCase() + el.slice(1));
      return res.join(" ");
    }
  };

  return (
    <>
      <StyledBtnProfile onClick={togglePopup}>
        <StyledImgProfile src={profileFoto} alt="profile foto" />
        <StyledProfileName>{editString(username)}</StyledProfileName>
      </StyledBtnProfile>
      <UserLogoPopup isOpen={isOpen} togglePopup={togglePopup} />
    </>
  );
};
