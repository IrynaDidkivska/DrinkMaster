import { ComponentWrapperStyled } from '../../addDrink.styled';
import Title from '../../../../shared/components/Title/Title';
import { SpriteSVG } from '../../../../shared/icons/SpriteSVG';
import AddDrinkSelect from './AddDrinkSelect/AddDrinkSelect';
import {
  AddImgButtonStyled,
  AddImgLabelStyled,
  ImgContainerStyled,
} from './AddForm.styled';
import Input from './Input/Input';
import RadioBtn from './RadioBtn/RadioBtn';

const AddForm = () => {
  return (
    <>
      <Title Title="Add drink" />
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
