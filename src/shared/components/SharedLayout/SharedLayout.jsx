import { Suspense, useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Loader from '../Loader/Loader';
import Header from '@/modules/header/components/Header/Header';
import Footer from '@/modules/footer/components/Footer/Footer';
import {
  OverlayBottom,
  OverlayMain,
  StyledSection,
} from '@/shared/styles/Section';
import { Container } from '@/shared/styles/Container';

const SharedLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/home');
    }
  }, [navigate, location]);

  return (
    <>
      <Header />
      <main>
        <StyledSection>
          <Container>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </Container>
          <OverlayMain />
          <OverlayBottom />
        </StyledSection>
      </main>
      <Footer />
    </>
  );
};

export default SharedLayout;
