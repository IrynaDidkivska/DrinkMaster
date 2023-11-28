import PropTypes from 'prop-types';
import { useState } from 'react';

import { updateUserThunk } from '@/redux/Auth/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '@/redux/Auth/selectors';

import { SpriteSVG } from '@/shared/icons/SpriteSVG';
import userFoto from '@/images/user.png';

import Modal from '@/shared/components/Modal/Modal';
import {
  Ellipse222,
  Ellipse224,
  StyledBtnClose,
  StyledBtnEdit,
  StyledBtnSave,
  StyledInputAdd,
  StyledModal,
  StyledModalForm,
  StyledModalHeader,
  StyledModalInput,
  StyledSvgWrapper,
  StyledUserFoto,
} from './UserInfoModal.styled';

export const UserInfoModal = ({ onClose }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [changedName, setChangedName] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

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

    const formData = new FormData();
    formData.append('username', changedName || username);
    formData.append('avatar', selectedFile);

    dispatch(updateUserThunk(formData))
      .unwrap()
      .then(() => {
        onClose();
      })
      .catch(error => {
        console.error('Error updating user', error.message);
      })
      .finally(() => {
        setIsEditing(false);
      });
  };

  return (
    <Modal onClose={onClose}>
      <StyledModal>
        <StyledBtnClose onClick={onClose}>
          <SpriteSVG name="close" />
        </StyledBtnClose>

        <StyledModalHeader>
          {previewImage && <StyledUserFoto src={previewImage} alt="Preview" />}

          {avatar && <StyledUserFoto src={avatar} alt="Foto" />}

          {!previewImage && !avatar && (
            <StyledUserFoto src={userFoto} alt="Default foto" />
          )}

          <StyledInputAdd
            type="file"
            onChange={onFileChange}
            onClick={onUpload}
          ></StyledInputAdd>
          <StyledSvgWrapper
            onClick={() => document.querySelector('input[type=file]').click()}
          >
            <SpriteSVG name="add-modal-photo" />
          </StyledSvgWrapper>
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
