import { useEffect, useState } from 'react';
import { SpriteSVG } from '../../../../shared/icons/SpriteSVG';
import AddDrinkSelect from './AddDrinkSelect/AddDrinkSelect';
import {
  AddFormWrapperStyled,
  AddImgContainerStyled,
  AddImgLabelStyled,
  HiddenInputStyled,
  ImgContainerStyled,
  InputWrapperStyled,
} from './AddForm.styled';
import Input from './Input/Input';
import RadioBtn from './RadioBtn/RadioBtn';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCategoriesThunk,
  getGlassesThunk,
} from '../../../../redux/Filters/operations';
import {
  selectNormalizedCategories,
  selectNormalizedGlasses,
} from '../../../../redux/Filters/selectors.js';

const AddForm = ({ setValues }) => {
  const {
    setDrinkPhoto,
    setDrink,
    setDescription,
    setGlass,
    setAlcoholic,
    setCategory,
  } = setValues;
  const dispatch = useDispatch();
  const categories = useSelector(selectNormalizedCategories);
  const glasses = useSelector(selectNormalizedGlasses);
  const [previewImg, setPreviewImg] = useState(null);

  useEffect(() => {
    dispatch(getCategoriesThunk());
    dispatch(getGlassesThunk());
  }, [dispatch]);

  const filePreparation = file => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImg(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewImg(null);
    }

    setDrinkPhoto(file);
  };

  const handleChangeImg = e => {
    filePreparation(e.target.files[0]);
  };

  return (
    <>
      <AddFormWrapperStyled>
        <ImgContainerStyled $bgImg={previewImg}>
          <AddImgLabelStyled htmlFor="addImg">
            <HiddenInputStyled
              type="file"
              accept="image/png, image/jpeg"
              id="addImg"
              onChange={handleChangeImg}
            />
            <SpriteSVG name="plus" />
          </AddImgLabelStyled>
          <AddImgContainerStyled> Add image</AddImgContainerStyled>
        </ImgContainerStyled>
        <InputWrapperStyled>
          <Input
            placeholder="Enter item title"
            type="text"
            changeF={setDrink}
          />
          <Input
            placeholder="Enter about recipe"
            type="text"
            changeF={setDescription}
          />
          <AddDrinkSelect
            label="Category"
            options={categories}
            changeF={setCategory}
          />
          <AddDrinkSelect label="Glass" options={glasses} changeF={setGlass} />
          <div>
            <RadioBtn
              id="alcoholic"
              name="isAlcohol"
              label="Alcoholic"
              value="Alcoholic"
              changeF={setAlcoholic}
            />
            <RadioBtn
              changeF={setAlcoholic}
              id="un-alcoholic"
              name="isAlcohol"
              label="Non-alcoholic"
              value="Non alcoholic"
            />
          </div>
        </InputWrapperStyled>
      </AddFormWrapperStyled>
    </>
  );
};

export default AddForm;
