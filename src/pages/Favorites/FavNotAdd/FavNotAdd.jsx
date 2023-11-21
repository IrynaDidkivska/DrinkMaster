// import Title from '../../../shared/components/Title/Title'
import Image from "./img/notFound.png";
import {
  Glass,
  OverlayLeft,
  OverlayRight,
  StyledFavNotAdd,
} from "./FavNotAdd.styled";

export const FavNotAdd = () => {
  return (
    <>
      {/* <Title Title='Favorites' /> */}
      <StyledFavNotAdd>
        <Glass src={Image} alt="Not added" />
        <p>You haven`t added any favorite cocktails yet</p>
        <OverlayLeft />
        <OverlayRight />
      </StyledFavNotAdd>
    </>
  );
};
