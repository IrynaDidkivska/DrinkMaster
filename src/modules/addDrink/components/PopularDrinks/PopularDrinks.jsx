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
import { getPopularThunk } from "../../../../redux/Drinks/operations";
import { selectPopulars } from "../../../../redux/Drinks/selectors";

function PopularDrinks() {
  const dispatch = useDispatch();
  const populars = useSelector(selectPopulars);

  useEffect(() => {
    dispatch(getPopularThunk());
  }, [dispatch]);

  return (
    <PopularWrapper>
      <Subtitle Subtitle={"Popular drinks"}></Subtitle>
      <PopularContainer>
        {populars?.map(({ description, drinkThumb, drink }) => (
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
