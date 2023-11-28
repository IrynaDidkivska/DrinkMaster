import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  const handleSeeMore = _id => {
    navigate(`/drinks/${_id}`);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    // Handle image load error if needed
    setImageLoaded(false);
  };

  return (
    <li key={data._id} style={{ position: 'relative' }}>
      <DrinkCardItemImage
        src={data.drinkThumb}
        alt={' '}
        onLoad={handleImageLoad}
        onError={handleImageError}
      />
      {!imageLoaded && (
        <DrinkCardItemImage
          src={Coctail}
          // alt={data.drink}
          style={{ position: 'absolute', top: 0 }}
        />
      )}
      <DrinkCardItemContainerDiscr>
        <DrinkCardItemName>{data.drink}</DrinkCardItemName>
        <DrinkCardItemSeeMore onClick={() => handleSeeMore(data._id)}>
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
