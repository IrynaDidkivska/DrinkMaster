import coctailJPEG from '/img/coctails.jpeg';
import coctailWEBP from '/img/coctails.webp';
import coctail2x from '/img/coctail@2x.jpeg';
import { StyledRecipeImages } from './RecipeImg.styled';

const RecipeImage = () => {
  return (
    <picture>
      <source srcSet={`${coctailWEBP} 1x, ${coctail2x} 2x`} type="image/webp" />
      <source srcSet={`${coctailJPEG}`} type="image/jpeg" />
      <StyledRecipeImages
        src={coctailJPEG}
        alt="Coctail"
        width="335"
        height="430"
        loading="lazy"
      />
    </picture>
  );
};

export default RecipeImage;
