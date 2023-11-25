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
} from './Card.styled';
import {
  deleteFromFavoriteThunk,
  deleteFromOwnThunk,
} from '../../../redux/Drinks/operations';
import { SpriteSVG } from '../../icons/SpriteSVG';
import { toast } from 'react-toastify';
import { confirmNamePage } from '../../helpers/confirmNamePage';

const Card = ({ data }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const namePage = confirmNamePage(location.pathname);

  const handleSeeMore = _id => {
    navigate(`/drinks/${_id}`);
  };

  const handleRemove = () => {
    if (namePage.favorites) {
      dispatch(deleteFromFavoriteThunk(data._id));
      toast.success('You removed drink from your favorite');
    } else {
      dispatch(deleteFromOwnThunk(data._id));
      toast.success('You removed drink from your own');
    }
  };

  return (
    <DrinkCardItemFaxContainer>
      <DrinkCardItemFaxImg src={data.drinkThumb} alt={data.drink} />
      <DrinkCardItemFaxName>{data.drink}</DrinkCardItemFaxName>
      <DrinkCardItemFaxStatus>{data.alcoholic}</DrinkCardItemFaxStatus>
      <DrinkCardItemFaxDescription>
        {data.shortDescription}
      </DrinkCardItemFaxDescription>
      <DrinkCardItemFaxNavi>
        <DrinkCardItemFaxBtn onClick={() => handleSeeMore(data._id)}>
          See more
        </DrinkCardItemFaxBtn>
        <DrinkCardItemFaxDel type="button" onClick={handleRemove}>
          <SpriteSVG name={'trash'} />
        </DrinkCardItemFaxDel>
      </DrinkCardItemFaxNavi>
    </DrinkCardItemFaxContainer>
  );
};

export default Card;

Card.propTypes = {
  data: PropTypes.shape({
    drinkThumb: PropTypes.string,
    drink: PropTypes.string,
    alcoholic: PropTypes.string,
    shortDescription: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};
