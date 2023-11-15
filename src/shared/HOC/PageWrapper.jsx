import PropTypes from 'prop-types';
import Header from '../../modules/header/components/Header/Header';

const PageWrapper = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <footer></footer>
    </>
  );
};

export default PageWrapper;

PageWrapper.propTypes = {
  children: PropTypes.node,
};
