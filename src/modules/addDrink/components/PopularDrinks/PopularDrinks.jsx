import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Subtitle from '@/shared/components/Title/Subtitle';
import {
  PopularContainer,
  PopularItemContainer,
  PopularImage,
  PopularName,
  PopularDiskr,
  PopularContainerDiscr,
  PopularWrapper,
} from './PopularDrinks.styled';
import { getPopularThunk } from '@/redux/Drinks/operations';
import { selectPopulars } from '@/redux/Drinks/selectors';
import { Link } from 'react-router-dom';
import { DefaultPopularImage } from '@/shared/helpers/defaultImgHelper';

function PopularDrinks() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const dispatch = useDispatch();
  const populars = useSelector(selectPopulars).slice(0, 4);

  useEffect(() => {
    dispatch(getPopularThunk());
  }, [dispatch]);

  return (
    <PopularWrapper>
      <Subtitle Subtitle={'Popular drinks'}></Subtitle>
      <PopularContainer>
        {populars?.map(({ description, drinkThumb, drink, _id }) => (
          <Link
            to={`/drinks/${_id}`}
            key={_id}
            style={{ position: 'relative' }}
          >
            <PopularItemContainer key={drink}>
              <PopularImage
                src={drinkThumb}
                alt={' '}
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageLoaded(false)}
              />
              {!imageLoaded && <DefaultPopularImage />}
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
