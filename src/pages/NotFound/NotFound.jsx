import { Glass, StyledWrapper } from "./NotFound.styled";
import Image from "./img/notFound.png";

const NotFound = () => {
  return (
    <>
      <StyledWrapper>
        <span>4</span>
        <Glass src={Image} alt="Coctail which introduce page not found" />
        <span>4</span>
      </StyledWrapper>
    </>
  );
};

export default NotFound;
