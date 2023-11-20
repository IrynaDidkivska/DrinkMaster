import { useEffect } from "react";
import LigthBtn from "../../shared/components/Buttons/LigthBtn";
import { useDispatch, useSelector } from "react-redux";
import { StyledTitle } from "../../shared/components/Title/Title.styled";
import { HomeImage, HomeWrapper, MainText } from "./HomePage.styled";
import Image from "./img/Found.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { selectMainCatalog } from "../../redux/Drinks/selectors";
import { getAllDrinksThunk } from "../../redux/Drinks/operations";
import { getCategoriesThunk } from "../../redux/Filters/operations";
import DrinkCardItem from "../../shared/components/DrinkCardItem/DrinkCardItem";

const HomePage = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);

  const handleAddDrinkClick = () => {
    navigate("/add");
  };

  const dispatch = useDispatch();
  const allCatalog = useSelector(selectMainCatalog);

  useEffect(() => {
    dispatch(getAllDrinksThunk({ page: currentPage }));
    dispatch(getCategoriesThunk());
  }, [dispatch, currentPage]);

  const handleNextPageClick = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleOtherDrinks = () => {
    navigate("/drinks");
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
          <LigthBtn onClick={handleAddDrinkClick}>Add drink</LigthBtn>
        </div>
        <HomeImage src={Image} alt="Coctail's name" />
      </HomeWrapper>
      <>
        {allCatalog.map((drink) => (
          <DrinkCardItem key={drink._id} {...drink} />
        ))}

        <LigthBtn onClick={handleNextPageClick}>Next Page</LigthBtn>
        <LigthBtn onClick={handleOtherDrinks}>Other drinks</LigthBtn>
      </>
    </>
  );
};

export default HomePage;
