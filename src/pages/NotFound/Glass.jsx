import coctailPNG from '../../../public/img/notFound.png';
import coctailWEBP from '../../../public/img/notFound.webp';
import coctail2x from '../../../public/img/notFound@2x.png';
import { StyledImage } from './NotFound.styled';

const Glass = () => {
  return (
    <picture>
      <source srcSet={`${coctailWEBP} 1x, ${coctail2x} 2x`} type="image/webp" />

      <source srcSet={`${coctailPNG}`} type="image/jpeg" />

      <StyledImage src={coctailPNG} alt="Coctail" width="123" height="156" />
    </picture>
  );
};

export default Glass;
