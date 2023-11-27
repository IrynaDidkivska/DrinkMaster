import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Loader from '../Loader/Loader';
import Header from '../../../modules/header/components/Header/Header';
import Footer from '../../../modules/footer/components/Footer/Footer';
import { Suspense, useEffect } from 'react';
import { Container } from '../../styles/Container';
import {
  OverlayBottom,
  OverlayMain,
  StyledSection,
} from '../../styles/Section';

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
