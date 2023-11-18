import { HomeImage } from "../HomePage/HomePage.styled";
import { Overlay, StyledWrapper } from "./NotFound.styled";
import Image from "./img/notFound.png";

const NotFound = () => {
  return (
    <>
      <StyledWrapper>
        <span>4</span>
        <HomeImage src={Image} alt="0" />
        <span>4</span>
      </StyledWrapper>
      <Overlay></Overlay>
    </>
  );
};

export default NotFound;
