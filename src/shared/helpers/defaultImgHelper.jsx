import { PopularImage } from '@/modules/addDrink/components/PopularDrinks/PopularDrinks.styled';
import Coctail from '../../shared/img/image.png';
import { DrinkCardItemImage } from '../components/DrinkCardItem/DrinkCardItem.styled';
import { DrinkCardItemFaxImg } from '../components/Card/Card.styled';

export const DefaultCardImage = () => {
  return (
    <div>
      <DrinkCardItemImage
        src={Coctail}
        alt="Picture of general drink"
        style={{ position: 'absolute', top: 0 }}
      />
    </div>
  );
};

export const DefaultPopularImage = () => {
  return (
    <div>
      <PopularImage
        src={Coctail}
        alt="Picture of general drink"
        style={{ position: 'absolute', top: 0 }}
      />
    </div>
  );
};

export const DefaultDrinkCardItemFaxImg = () => {
  return (
    <div>
      <DrinkCardItemFaxImg
        src={Coctail}
        alt="Picture of general drink"
        style={{ position: 'absolute', top: 0 }}
      />
    </div>
  );
};
