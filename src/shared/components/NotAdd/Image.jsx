import coctailPNG from '/img/notFound.png';
import coctailWEBP from '/img/notFound.webp';
import coctail2x from '/img/notFound@2x.png';
import { StyledImage } from './NotAdd.styled';

const Image = () => {
  return (
    <picture>
      <source srcSet={`${coctailWEBP} 1x, ${coctail2x} 2x`} type="image/webp" />

      <source srcSet={`${coctailPNG}`} type="image/jpeg" />

      <StyledImage
        src={coctailPNG}
        alt="Coctail"
        width="198"
        height="247"
        loading="lazy"
      />
    </picture>
  );
};

export default Image;
