import { SpriteSVG } from '../../../../shared/icons/SpriteSVG';
import { ComponentWrapperStyled } from '../../addDrink.styled';
import AddDrinkSelect from './AddDrinkSelect/AddDrinkSelect';
import {
  AddImgButtonStyled,
  AddImgLabelStyled,
  ImgContainerStyled,
  TitleStyled,
} from './AddForm.styled';
import Input from './Input/Input';
import RadioBtn from './RadioBtn/RadioBtn';

const AddForm = () => {
  return (
    <>
      <TitleStyled>Add drink</TitleStyled>
      <ComponentWrapperStyled>
        <ImgContainerStyled htmlFor="addImg">
          <AddImgLabelStyled>
            <AddImgButtonStyled id="addImg" type="button">
              <SpriteSVG name="plus" />
            </AddImgButtonStyled>
            Add image
          </AddImgLabelStyled>
        </ImgContainerStyled>
        <Input placeholder="Enter item title" type="text" />
        <Input placeholder="Enter about recipe" type="text" />
        <AddDrinkSelect label="Category" />
        <AddDrinkSelect label="Glass" />
        <RadioBtn id="alcoholic" name="isAlcohol" label={'Alcoholic'} />
        <RadioBtn id="un-alcoholic" name="isAlcohol" label={'Non-alcoholic'} />
      </ComponentWrapperStyled>
    </>
  );
};

export default AddForm;
