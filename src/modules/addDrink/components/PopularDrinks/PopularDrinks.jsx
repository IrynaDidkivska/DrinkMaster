import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Subtitle from "../../../../shared/components/Title/Subtitle";
import {
  PopularContainer,
  PopularItemContainer,
  PopularImage,
  PopularName,
  PopularDiskr,
  PopularContainerDiscr,
  PopularWrapper,
} from "./PopularDrinks.styled";
import {
  getFavoriteThunk,
  getPopularThunk,
} from "../../../../redux/Drinks/operations";
import {
  selectFavorites,
  selectPopulars,
} from "../../../../redux/Drinks/selectors";

function PopularDrinks() {
  const dispatch = useDispatch();
  const populars = useSelector(selectPopulars);
  const favorite = useSelector(selectFavorites);

  useEffect(() => {
    dispatch(getPopularThunk());
    dispatch(getFavoriteThunk());
  }, [dispatch]);

  return (
    <PopularWrapper>
      <Subtitle Subtitle={"Popular drinks"}></Subtitle>
      <PopularContainer>
        {favorite?.map(({ description, drinkThumb, drink }) => (
          <PopularItemContainer key={drink}>
            <PopularImage src={drinkThumb} alt={drink} />
            <PopularContainerDiscr>
              <PopularName>{drink}</PopularName>
              <PopularDiskr>{description}</PopularDiskr>
            </PopularContainerDiscr>
          </PopularItemContainer>
        ))}
      </PopularContainer>
    </PopularWrapper>
  );
}

export default PopularDrinks;
