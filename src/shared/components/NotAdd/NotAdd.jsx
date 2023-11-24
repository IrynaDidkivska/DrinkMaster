// import Title from '../../../shared/components/Title/Title'
import Image from "./img/notFound.png";
import {
  Glass,
  OverlayLeft,
  OverlayRight,
  StyledNotAdd,
} from "./NotAdd.styled";
import { useLocation } from "react-router-dom";
import { confirmNamePage } from "../../helpers/confirmNamePage";

export const NotAdd = () => {
  const location = useLocation();
  const namePage = confirmNamePage(location.pathname);
  return (
    <>
      <StyledNotAdd>
        <Glass src={Image} alt="Not added" />
        {namePage.my && (
          <p>So far, you haven&apos;t made any drinks of your own</p>
        )}

        {namePage.favorites && (
          <p>You haven&apos;t added any favorite cocktails yet</p>
        )}

        <OverlayLeft />
        <OverlayRight />
      </StyledNotAdd>
    </>
  );
};
