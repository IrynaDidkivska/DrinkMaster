import { Glass, Overlay, StyledWrapper } from "./NotFound.styled";
import Image from "./img/notFound.png";

const NotFound = () => {
  return (
    <>
      <StyledWrapper>
        <span>4</span>
        <Glass src={Image} alt="0" />
        <span>4</span>
      </StyledWrapper>
      <Overlay></Overlay>
    </>
  );
};

export default NotFound;
