import { Suspense } from "react";
import { Container } from "../../styles/Container";
import { Outlet } from "react-router-dom";
import Loader from "../Loader/Loader";

const Layout = () => {
  return (
    <>
      <header>Header</header>
      <main>
        <Suspense fallback={<Loader />}>
          <Container>
            <Outlet />
          </Container>
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
