import { useEffect, useState } from "react";
import LigthBtn from "../../shared/components/Buttons/LigthBtn";
import { useDispatch, useSelector } from "react-redux";
import { StyledTitle } from "../../shared/components/Title/Title.styled";
import {
  HomeImage,
  HomeWrapper,
  MainText,
  WrapperCategory,
} from "./HomePage.styled";
import Image from "./img/Found.png";
import { useNavigate } from "react-router-dom";
import { selectMainCatalog } from "../../redux/Drinks/selectors";
import { getAllDrinksThunk } from "../../redux/Drinks/operations";
import DrinkCardItem from "../../shared/components/DrinkCardItem/DrinkCardItem";
import { List } from "../../shared/components/DrinkList/DrinkList.styled";

const HomePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const allCatalog = useSelector(selectMainCatalog);
  const categ = Object.keys(allCatalog);
  useEffect(() => {
    dispatch(getAllDrinksThunk({ page: currentPage }));
  }, [currentPage, dispatch]);

  const handleOtherDrinks = () => {
    navigate("/drinks");
  };
  const handleAddDrinkClick = () => {
    navigate("/add");
  };

  return (
    <>
      <HomeWrapper>
        <div>
          <StyledTitle>
            {"Craft Your Perfect Drink with Drink Master"}
          </StyledTitle>
          <MainText>
            Unlock your inner mixologist with Drink Master, your one-stop
            destination for exploring, crafting, and mastering the world&apos;s
            finest beverages.
          </MainText>
          {categ.map((category) => {
            const foreCoctails = allCatalog[category];
            return (
              <>
                <h1 key={category}>
                  <WrapperCategory>
                    {category}
                    {foreCoctails.map((drink) => (
                      <DrinkCardItem key={drink._id} data={drink} />
                    ))}
                  </WrapperCategory>
                </h1>
              </>
            );
          })}

          <LigthBtn onClick={handleAddDrinkClick}>Add drink</LigthBtn>
        </div>
        <HomeImage src={Image} alt="Coctail's name" />
      </HomeWrapper>
      <List></List>
      <LigthBtn onClick={handleOtherDrinks}>Other drinks</LigthBtn>
    </>
  );
};

export default HomePage;
