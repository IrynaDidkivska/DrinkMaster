import { RevolvingDot } from "react-loader-spinner";
import { StyledLoaderWrapper } from "./Loader.styled";

const Loader = () => {
  return (
    <StyledLoaderWrapper>
      <RevolvingDot
        radius="70"
        strokeWidth="10"
        color="#BCE6D2"
        secondaryColor="#4070CD"
        ariaLabel="revolving-dot-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </StyledLoaderWrapper>
  );
};

export default Loader;
