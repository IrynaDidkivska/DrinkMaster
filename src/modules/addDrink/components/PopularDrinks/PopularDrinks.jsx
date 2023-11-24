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
import { Link } from "react-router-dom";

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
        {populars?.map(({ description, drinkThumb, drink, _id }) => (
          <Link to={`/drinks/${_id}`} key={_id}>
            <PopularItemContainer key={drink}>
              {drinkThumb ? (
                <PopularImage src={drinkThumb} alt={drink} />
              ) : (
                <img
                  src="../../../../shared/img/image.jpg"
                  alt="alternative_text"
                />
              )}
              <PopularContainerDiscr>
                <PopularName>{drink}</PopularName>
                <PopularDiskr>{description}</PopularDiskr>
              </PopularContainerDiscr>
            </PopularItemContainer>
          </Link>
        ))}
      </PopularContainer>
    </PopularWrapper>
  );
}

export default PopularDrinks;
