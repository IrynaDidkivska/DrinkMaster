import { Suspense } from "react";
import { Container } from "../../styles/Container";
import { Outlet } from "react-router-dom";
import Loader from "../Loader/Loader";
import Footer from "../../../modules/footer/components/Footer/Footer";

const SharedLayout = () => {
  return (
    <Container>
      <header>Header</header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </Container>
  );
};

export default SharedLayout;
