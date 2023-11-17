import { Outlet } from "react-router-dom";
import Loader from "../Loader/Loader";
import Header from "../../../modules/header/components/Header/Header";
import Footer from "../../../modules/footer/components/Footer/Footer";
import { Suspense } from "react";
import { Container } from "../../styles/Container";

const SharedLayout = () => {
  return (
    <>
      <Header />
      <main>
        <section>
          <Container>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default SharedLayout;
