import { useEffect } from 'react';
import Title from '../../../../shared/components/Title/Title';
import { SpriteSVG } from '../../../../shared/icons/SpriteSVG';
import AddDrinkSelect from './AddDrinkSelect/AddDrinkSelect';
import {
  AddFormWrapperStyled,
  AddImgButtonStyled,
  AddImgLabelStyled,
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
  selectCategories,
  selectGlasses,
} from '../../../../redux/Filters/selectors.js';
import { optionsNormalize } from '../../helpers/optionsNormalize.js';

const AddForm = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const glasses = useSelector(selectGlasses);

  useEffect(() => {
    dispatch(getCategoriesThunk());
    dispatch(getGlassesThunk());
  }, []);

  return (
    <>
      <Title Title="Add drink" />
      <AddFormWrapperStyled>
        <ImgContainerStyled htmlFor="addImg">
          <AddImgLabelStyled>
            <AddImgButtonStyled id="addImg" type="button">
              <SpriteSVG name="plus" />
            </AddImgButtonStyled>
            Add image
          </AddImgLabelStyled>
        </ImgContainerStyled>
        <InputWrapperStyled>
          <Input placeholder="Enter item title" type="text" />
          <Input placeholder="Enter about recipe" type="text" />
          <AddDrinkSelect
            label="Category"
            options={optionsNormalize(categories, 'category')}
          />
          <AddDrinkSelect
            label="Glass"
            options={optionsNormalize(glasses, 'glass')}
          />
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
