import { Outlet } from "react-router-dom";
import Loader from "../Loader/Loader";
import Header from "../../../modules/header/components/Header/Header";
import Footer from "../../../modules/footer/components/Footer/Footer";
import { Suspense } from "react";

const SharedLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default SharedLayout;
