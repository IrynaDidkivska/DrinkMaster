import Loader from '@/shared/components/Loader/Loader';
import { StyledModalContent } from './ModalContent.styled';

const ModalContent = data => {
  return data ? (
    <StyledModalContent>
      {data.map((item, id) => (
        <p key={id}>{item[`paragraph${id + 1}`]}</p>
      ))}
    </StyledModalContent>
  ) : (
    <Loader />
  );
};

export default ModalContent;
