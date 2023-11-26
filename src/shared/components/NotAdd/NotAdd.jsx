import { StyledNotAdd } from './NotAdd.styled';
import { useLocation } from 'react-router-dom';
import { confirmNamePage } from '../../helpers/confirmNamePage';
import Image from './Image';

export const NotAdd = () => {
  const location = useLocation();
  const namePage = confirmNamePage(location.pathname);
  return (
    <StyledNotAdd>
      <Image />
      {namePage.my && (
        <p>So far, you haven&apos;t made any drinks of your own</p>
      )}

      {namePage.favorites && (
        <p>You haven&apos;t added any favorite cocktails yet</p>
      )}
    </StyledNotAdd>
  );
};
