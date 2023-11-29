import { useMediaQuery } from 'react-responsive';

const useResponsive = () => {
  const isMediumScreen = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 1439.98px)',
  });
  const isLargeScreen = useMediaQuery({ query: '(min-width: 1440px)' });

  return { isLargeScreen, isMediumScreen };
};

export default useResponsive;
