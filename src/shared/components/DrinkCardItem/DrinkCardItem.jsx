import PropTypes from 'prop-types';
import { useState } from 'react';
import {
  DrinkCardItemImage,
  DrinkCardItemName,
  DrinkCardItemSeeMore,
  DrinkCardItemContainerDiscr,
} from './DrinkCardItem.styled';

import { DefaultCardImage } from '@/shared/helpers/defaultImgHelper';

const DrinkCardItem = ({ data }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <li key={data._id} style={{ position: 'relative' }}>
      <DrinkCardItemImage
        src={data.drinkThumb}
        alt={' '}
        onLoad={() => setImageLoaded(true)}
        onError={() => setImageLoaded(false)}
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
