import PageWrapper from "../../shared/HOC/PageWrapper";
import { Overlay, StyledWrapper } from "./NotFound.styled";

const NotFound = () => {
  return (
    <PageWrapper>
      <StyledWrapper>
        <span>4</span>
        <span>4</span>
      </StyledWrapper>
      <Overlay></Overlay>
    </PageWrapper>
  );
};

export default NotFound;
