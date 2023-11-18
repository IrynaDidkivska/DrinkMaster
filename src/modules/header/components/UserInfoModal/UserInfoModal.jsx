import PropTypes from 'prop-types';
import Modal from '../../../../shared/components/Modal/Modal';
import {
  Ellipse222,
  Ellipse224,
  StyledBtnAdd,
  StyledBtnClose,
  StyledBtnEdit,
  StyledBtnSave,
  StyledModal,
  StyledModalForm,
  StyledModalHeader,
  StyledModalInput,
  StyledUserFoto,
} from './UserInfoModal.styled';
import { SpriteSVG } from '../../../../shared/icons/SpriteSVG';
import userFoto from '../../images/user.png';

export const UserInfoModal = ({ onClose }) => {
  return (
    <Modal onClose={onClose}>
      <StyledModal>
        <StyledBtnClose onClick={onClose}>
          <SpriteSVG name="close-modal" />
        </StyledBtnClose>

        <StyledModalHeader>
          <StyledUserFoto src={userFoto} alt="User foto" />
          <StyledBtnAdd>
            <SpriteSVG name="add-modal-photo" />
          </StyledBtnAdd>
        </StyledModalHeader>

        <StyledModalForm>
          <StyledModalInput />
          <StyledBtnEdit>
            <SpriteSVG name="edit-02" />
          </StyledBtnEdit>
          <StyledBtnSave>Save changes</StyledBtnSave>
        </StyledModalForm>

        <Ellipse222 />
        <Ellipse224 />
      </StyledModal>
    </Modal>
  );
};

UserInfoModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
