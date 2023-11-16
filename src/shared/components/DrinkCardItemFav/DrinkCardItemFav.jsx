import MartinyImage from '../../components/DrinkCardItem/Rectangle40559.png';
import {
  DrinkCardItemFaxContainer,
  DrinkCardItemFaxImg,
  DrinkCardItemFaxName,
  DrinkCardItemFaxStatus,
  DrinkCardItemFaxDescription,
  DrinkCardItemFaxNavi,
  DrinkCardItemFaxBtn,
  DrinkCardItemFaxDel,
} from './DrinkCardItemFav.styled';
import { SpriteSVG } from "../../icons/SpriteSVG";
const DrinkCardItemFav = () => {
  return (
    <DrinkCardItemFaxContainer>
      <DrinkCardItemFaxImg src={MartinyImage} alt="Coctail's name" />
      <DrinkCardItemFaxName>Ebglish Rose Cocktail</DrinkCardItemFaxName>
      <DrinkCardItemFaxStatus>Alcohol</DrinkCardItemFaxStatus>
      <DrinkCardItemFaxDescription>
        This beautiful gin cocktail combines apricot brandy, dry vermouth, grenadine, lemon juice, and gin, and tastes like a much fruitier version of the classic martini. Rim and garnish with sugar and cherries for a little extra sweet cocktail goodness.
      </DrinkCardItemFaxDescription>
      <DrinkCardItemFaxNavi>
        <DrinkCardItemFaxBtn>See more</DrinkCardItemFaxBtn>
        <DrinkCardItemFaxDel>
            <SpriteSVG name={"trash"}/>
        </DrinkCardItemFaxDel>
      </DrinkCardItemFaxNavi>
    </DrinkCardItemFaxContainer>
  );
};

export default DrinkCardItemFav;