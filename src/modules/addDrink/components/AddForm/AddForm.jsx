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

const AddForm = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectNormalizedCategories);
  const glasses = useSelector(selectNormalizedGlasses);
  const [img, setImg] = useState('');

  useEffect(() => {
    dispatch(getCategoriesThunk());
    dispatch(getGlassesThunk());
  }, []);

  const handleChangeImg = e => {
    console.log(e.target.files[0]);
    setImg(e.target.files[0]);
  };

  return (
    <>
      <AddFormWrapperStyled>
        <ImgContainerStyled $bgImg={img}>
          <AddImgLabelStyled htmlFor="addImg">
            <HiddenInputStyled
              type="file"
              accept="image/png, image/jpeg"
              id="addImg"
              style={{ visibility: 'hidden' }}
              value={img}
              onChange={handleChangeImg}
            />
            <SpriteSVG name="plus" />
          </AddImgLabelStyled>
          <AddImgContainerStyled> Add image</AddImgContainerStyled>
        </ImgContainerStyled>
        <InputWrapperStyled>
          <Input placeholder="Enter item title" type="text" />
          <Input placeholder="Enter about recipe" type="text" />
          <AddDrinkSelect label="Category" options={categories} />
          <AddDrinkSelect label="Glass" options={glasses} />
          <div>
            <RadioBtn id="alcoholic" name="isAlcohol" label={'Alcoholic'} />
            <RadioBtn
              id="un-alcoholic"
              name="isAlcohol"
              label={'Non-alcoholic'}
            />
          </div>
        </InputWrapperStyled>
      </AddFormWrapperStyled>
    </>
  );
};

export default AddForm;
