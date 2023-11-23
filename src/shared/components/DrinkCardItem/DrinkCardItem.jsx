import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  DrinkCardItemContainer,
  DrinkCardItemImage,
  DrinkCardItemName,
  DrinkCardItemSeeMore,
  DrinkCardItemContainerDiscr,
} from './DrinkCardItem.styled';

const DrinkCardItem = ({ data }) => {
  const navigate = useNavigate();

  const handleSeeMore = _id => {
    navigate(`/drinks/${_id}`);
  };

  return (
    <DrinkCardItemContainer key={data._id}>
      <DrinkCardItemImage src={data.drinkThumb} alt={data.drink} />
      <DrinkCardItemContainerDiscr>
        <DrinkCardItemName>{data.drink}</DrinkCardItemName>
        <DrinkCardItemSeeMore onClick={() => handleSeeMore(data._id)}>
          See more
        </DrinkCardItemSeeMore>
      </DrinkCardItemContainerDiscr>
    </DrinkCardItemContainer>
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
