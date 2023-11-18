import Title from "../../../../shared/components/Title/Title";
import { SpriteSVG } from "../../../../shared/icons/SpriteSVG";
import AddDrinkSelect from "./AddDrinkSelect/AddDrinkSelect";
import {
  AddImgButtonStyled,
  AddImgLabelStyled,
  ImgContainerStyled,
} from "./AddForm.styled";
import Input from "./Input/Input";

const AddForm = () => {
  return (
    <>
      <Title Title="Add drink" />
      <div>
        <ImgContainerStyled for="addImg">
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
        <input type="radio" />
        <input type="radio" />
      </div>
    </>
  );
};

export default AddForm;
