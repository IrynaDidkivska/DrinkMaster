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
import { useState } from 'react';
import { updateUserThunk } from '../../../../redux/Auth/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../../../redux/Auth/selectors';

export const UserInfoModal = ({ onClose }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [changedName, setChangedName] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [isEditing, setIsEditing] = useState(false); // Добавлено состояние для отслеживания режима редактирования
  const dispatch = useDispatch();
  const { username, avatar } = useSelector(selectUser);

  const handleFileChange = file => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }

    setSelectedFile(file);
  };

  const onFileChange = event => {
    const file = event.target.files[0];
    handleFileChange(file);
  };

  const onUpload = async event => {
    if (event.target.type === 'file') {
      const file = event.target.files[0];
      handleFileChange(file);
      return;
    }

    event.preventDefault();

    const dataUser = {
      username: changedName,
      avatar: selectedFile,
    };

    console.log(dataUser);

    dispatch(
      updateUserThunk({
        dataUser,
      })
    );

    setIsEditing(false);
  };

  return (
    <Modal onClose={onClose}>
      <StyledModal>
        <StyledBtnClose onClick={onClose}>
          <SpriteSVG name="close-modal" />
        </StyledBtnClose>

        <StyledModalHeader>
          {previewImage ? (
            <StyledUserFoto src={previewImage} alt="Preview" />
          ) : avatar ? (
            <StyledUserFoto src={avatar} alt="User foto" />
          ) : (
            <StyledUserFoto src={userFoto} alt="Default user foto" />
          )}

          <StyledBtnAdd
            type="file"
            onChange={onFileChange}
            onClick={onUpload}
          ></StyledBtnAdd>
          <SpriteSVG name="add-modal-photo" />
        </StyledModalHeader>

        <StyledModalForm>
          <StyledModalInput
            value={changedName || username}
            onChange={event => setChangedName(event.target.value)}
            disabled={!isEditing}
          />

          <StyledBtnEdit
            onClick={event => {
              event.preventDefault();
              setIsEditing(true);
            }}
          >
            <SpriteSVG name="edit-02" />
          </StyledBtnEdit>

          <StyledBtnSave onClick={onUpload}>Save changes</StyledBtnSave>
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
