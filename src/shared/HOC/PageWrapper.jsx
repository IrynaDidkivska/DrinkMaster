import PropTypes from "prop-types";

const PageWrapper = ({ children }) => {
  return (
    <>
      <header></header>
      <main>{children}</main>
      <footer></footer>
    </>
  );
};

export default PageWrapper;

PageWrapper.propTypes = {
  children: PropTypes.node,
};
