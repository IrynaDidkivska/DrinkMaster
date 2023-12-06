import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import {
  deleteFromFavoriteThunk,
  deleteFromOwnThunk,
} from '@/redux/Drinks/operations';
import { SpriteSVG } from '@/shared/icons/SpriteSVG';
import { confirmNamePage } from '@/shared/helpers/confirmNamePage';
import { DefaultDrinkCardItemFaxImg } from '@/shared/helpers/defaultImgHelper';

import {
  DivRelative,
  DrinkCardContent,
  DrinkCardItemFaxBtn,
  DrinkCardItemFaxContainer,
  DrinkCardItemFaxDel,
  DrinkCardItemFaxDescription,
  DrinkCardItemFaxImg,
  DrinkCardItemFaxName,
  DrinkCardItemFaxNavi,
  DrinkCardItemFaxStatus,
} from './Card.styled';

const Card = ({ data }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [imageLoaded, setImageLoaded] = useState(false);

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
      <DrinkCardItemFaxImg
        src={data.drinkThumb}
        alt={data.drink}
        onLoad={() => setImageLoaded(true)}
        onError={() => setImageLoaded(false)}
        onClick={() => handleSeeMore(data._id)}
      />

      <DrinkCardContent>
        <div>
          {!imageLoaded && <DefaultDrinkCardItemFaxImg />}
          <DrinkCardItemFaxName>{data.drink}</DrinkCardItemFaxName>
          <DrinkCardItemFaxStatus>{data.alcoholic}</DrinkCardItemFaxStatus>
        </div>
        <DrinkCardItemFaxDescription>
          {data.shortDescription}
        </DrinkCardItemFaxDescription>
      </DrinkCardContent>
      <DrinkCardItemFaxNavi>
        <DrinkCardItemFaxBtn
          onClick={() => handleSeeMore(data._id)}
          type="button"
        >
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
