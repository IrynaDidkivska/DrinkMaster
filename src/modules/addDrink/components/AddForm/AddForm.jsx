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

const AddForm = () => {
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
          <AddDrinkSelect label="Category" />
          <AddDrinkSelect label="Glass" />
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
