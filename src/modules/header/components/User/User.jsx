import { useState } from "react";
import { selectUser } from "../../../../redux/Auth/selectors";
import profileFoto from "../../images/profile-foto.png";
import {
  StyledBtnProfile,
  StyledImgProfile,
  StyledProfileName,
} from "./User.styled";
import { useSelector } from "react-redux";
import { UserLogoPopup } from "../UserLogoPopup/UserLogoPopup";

export const User = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const editString = (name) => {
    if (name) {
      const arrFromStr = name.split(" ");
      const res = arrFromStr.map((el) => el[0].toUpperCase() + el.slice(1));
      return res.join(" ");
    }
  };

  const { username } = useSelector(selectUser);

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
