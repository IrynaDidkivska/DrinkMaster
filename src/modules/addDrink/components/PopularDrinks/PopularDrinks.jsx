import { useEffect, useState } from "react";
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
import Coctail from "../../../../shared/img/image.png";

function PopularDrinks() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const dispatch = useDispatch();
  const populars = useSelector(selectPopulars).slice(0, 4);

  useEffect(() => {
    dispatch(getPopularThunk());
  }, [dispatch]);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    // Handle image load error if needed
    setImageLoaded(false);
  };

  return (
    <PopularWrapper>
      <Subtitle Subtitle={"Popular drinks"}></Subtitle>
      <PopularContainer>
        {populars?.map(({ description, drinkThumb, drink, _id }) => (
          <Link
            to={`/drinks/${_id}`}
            key={_id}
            style={{ position: "relative" }}
          >
            <PopularItemContainer key={drink}>
              <PopularImage
                src={drinkThumb}
                alt={drink}
                onLoad={handleImageLoad}
                onError={handleImageError}
              />
              {!imageLoaded && (
                <PopularImage
                  src={Coctail}
                  alt={drink}
                  style={{ position: "absolute", top: 0 }}
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
