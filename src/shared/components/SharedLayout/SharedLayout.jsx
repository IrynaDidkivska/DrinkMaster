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
import { getWakeUpServer } from '../../services/api-service';

const SharedLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Перевіряємо, чи поточна локація є кореневою
    if (location.pathname === '/') {
      navigate('/home');
    }
  }, [navigate, location]);

  // useEffect(() => {
  //   console.log('hello');
  //   getWakeUpServer();
  // }, []);

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
