import PropTypes from 'prop-types';
import { useState } from 'react';
import {
  DrinkCardItemImage,
  DrinkCardItemName,
  DrinkCardItemSeeMore,
  DrinkCardItemContainerDiscr,
} from './DrinkCardItem.styled';

import { DefaultCardImage } from '@/shared/helpers/defaultImgHelper';
import { useNavigate } from 'react-router-dom';

const DrinkCardItem = ({ data }) => {
  const navigate = useNavigate();
  const [imageLoaded, setImageLoaded] = useState(false);
  const handleClick = () => {
    navigate(`/drinks/${data._id}`);
  };

  return (
    <li key={data._id} style={{ position: 'relative' }}>
      <DrinkCardItemImage
        src={data.drinkThumb}
        alt={data.drink}
        onLoad={() => setImageLoaded(true)}
        onError={() => setImageLoaded(false)}
        onClick={handleClick}
      />
      {!imageLoaded && <DefaultCardImage />}
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
