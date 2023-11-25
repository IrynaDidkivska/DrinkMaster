import PropTypes from 'prop-types';
import { ModalOverlay } from './Modal.styled';
import { useEffect } from 'react';

const Modal = ({ children, onClose }) => {
  useEffect(() => {
    const handleEscape = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  if (!onClose) {
    return null;
  }

  return (
    <ModalOverlay
      onClick={event => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      {children}
    </ModalOverlay>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
