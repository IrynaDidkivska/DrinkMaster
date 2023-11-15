import PropTypes from "prop-types";
import Footer from "../../modules/footer/components/Footer/Footer";
import Header from "../../modules/header/components/Header/Header";

const PageWrapper = ({ children }) => {
  return (
    <>
      <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
    </>
  );
};

export default PageWrapper;

PageWrapper.propTypes = {
  children: PropTypes.node,
};
