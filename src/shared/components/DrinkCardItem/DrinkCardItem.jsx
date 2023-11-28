import PropTypes from 'prop-types';
import { useState } from 'react';
import Coctail from '../../img/image.png';
import {
  DrinkCardItemImage,
  DrinkCardItemName,
  DrinkCardItemSeeMore,
  DrinkCardItemContainerDiscr,
} from './DrinkCardItem.styled';

const DrinkCardItem = ({ data }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageLoaded(false);
  };

  return (
    <li key={data._id} style={{ position: 'relative' }}>
      <DrinkCardItemImage
        src={data.drinkThumb}
        alt={data.drink}
        onLoad={handleImageLoad}
        onError={handleImageError}
        loading="lazy"
        width="335"
        height="360"
      />
      {!imageLoaded && (
        <DrinkCardItemImage
          src={Coctail}
          alt={data.drink}
          style={{ position: 'absolute', top: 0 }}
          loading="lazy"
          width="335"
          height="360"
        />
      )}
      <DrinkCardItemContainerDiscr>
        <DrinkCardItemName>{data.drink}</DrinkCardItemName>
        <DrinkCardItemSeeMore to={`/drinks/${data._id}`} rel="prefetch">
          See more
        </DrinkCardItemSeeMore>
      </DrinkCardItemContainerDiscr>
    </li>
  );
};

export default DrinkCardItem;

DrinkCardItem.propTypes = {
  data: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    drinkThumb: PropTypes.string.isRequired,
    drink: PropTypes.string.isRequired,
  }).isRequired,
};
