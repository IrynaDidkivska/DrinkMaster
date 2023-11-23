import { Outlet } from "react-router-dom";
import Loader from "../Loader/Loader";
import Header from "../../../modules/header/components/Header/Header";
import Footer from "../../../modules/footer/components/Footer/Footer";
import { Suspense } from "react";
import { Container } from "../../styles/Container";
import { StyledSection } from "../../styles/Section";

const SharedLayout = () => {
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
        </StyledSection>
      </main>
      <Footer />
    </>
  );
};

export default SharedLayout;
