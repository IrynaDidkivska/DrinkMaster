import { useMediaQuery } from 'react-responsive';

const useResponsive = () => {
  const isSmallScreen = useMediaQuery({
    query: '(min-width: 375px) and (max-width: 1439.98px)',
  });
  const isMediumScreen = useMediaQuery({
    query: '(min-width: 768px)',
  });
  const isLargeScreen = useMediaQuery({ query: '(min-width: 1440px)' });

  return { isLargeScreen, isMediumScreen, isSmallScreen };
};

export default useResponsive;
