import coctailPNG from '/img/notFound.png';
import coctailWEBP from '/img/notFound.webp';
import coctail2x from '/img/notFound@2x.png';
import { HomeImage } from './Hero.styled';

const Hero = () => {
  return (
    <picture>
      <source srcSet={`${coctailWEBP} 1x, ${coctail2x} 2x`} type="image/webp" />

      <source srcSet={`${coctailPNG}`} type="image/jpeg" />

      <HomeImage src={coctailPNG} alt="Coctail" width="252" height="313" />
    </picture>
  );
};

export default Hero;
