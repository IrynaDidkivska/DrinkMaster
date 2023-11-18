import LigthBtn from "../../shared/components/Buttons/LigthBtn";
import { StyledTitle } from "../../shared/components/Title/Title.styled";
import { HomeImage, HomeWrapper, MainText } from "./HomePage.styled";
import Image from "./img/Found.png";

const HomePage = () => {
  return (
    <HomeWrapper>
      <div>
        <StyledTitle>
          {"Craft Your Perfect Drink with Drink Master"}
        </StyledTitle>
        <MainText>
          Unlock your inner mixologist with Drink Master, your one-stop
          destination for exploring, crafting, and mastering the world's finest
          beverages.
        </MainText>
        <LigthBtn>Add drink</LigthBtn>
      </div>
      <HomeImage src={Image} alt="Coctail's name" />
    </HomeWrapper>
  );
};

export default HomePage;
