// useResponsive.js
import { useMediaQuery } from 'react-responsive';

const useResponsive = () => {
  const isLargeScreen = useMediaQuery({ query: '(min-width: 1400px)' });
  const isMediumScreen = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 1399px)',
  });

  return { isLargeScreen, isMediumScreen };
};

export default useResponsive;
