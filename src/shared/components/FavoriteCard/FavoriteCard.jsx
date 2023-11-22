import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  DrinkCardItemFaxBtn,
  DrinkCardItemFaxContainer,
  DrinkCardItemFaxDel,
  DrinkCardItemFaxDescription,
  DrinkCardItemFaxImg,
  DrinkCardItemFaxName,
  DrinkCardItemFaxNavi,
  DrinkCardItemFaxStatus,
} from './FavoriteCard.styled';
import { deleteFromFavoriteThunk } from '../../../redux/Drinks/operations';
import { SpriteSVG } from '../../icons/SpriteSVG';

const FavoriteCard = ({ favorite }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSeeMore = _id => {
    navigate(`/drinks/${_id}`);
  };

  return (
    <DrinkCardItemFaxContainer>
      <DrinkCardItemFaxImg src={favorite.drinkThumb} alt={favorite.drink} />
      <DrinkCardItemFaxName>{favorite.drink}</DrinkCardItemFaxName>
      <DrinkCardItemFaxStatus>{favorite.alcoholic}</DrinkCardItemFaxStatus>
      <DrinkCardItemFaxDescription>
        {favorite.shortDescription}
      </DrinkCardItemFaxDescription>
      <DrinkCardItemFaxNavi>
        <DrinkCardItemFaxBtn onClick={() => handleSeeMore(favorite._id)}>
          See more
        </DrinkCardItemFaxBtn>
        <DrinkCardItemFaxDel
          type="button"
          onClick={() => {
            dispatch(deleteFromFavoriteThunk(favorite._id));
          }}
        >
          <SpriteSVG name={'trash'} />
        </DrinkCardItemFaxDel>
      </DrinkCardItemFaxNavi>
    </DrinkCardItemFaxContainer>
  );
};

export default FavoriteCard;

FavoriteCard.propTypes = {
  favorite: PropTypes.shape({
    drinkThumb: PropTypes.string,
    drink: PropTypes.string,
    alcoholic: PropTypes.string,
    shortDescription: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};
