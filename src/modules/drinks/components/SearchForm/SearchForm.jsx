import { FormStyled, InputStyled, SelectStyled} from "./SerchForm.styled";

 const selectCategoryOptions = [
  {
    label: "Всі категорії",
    value: "",
  },
  {
    label: "Мотоцикл",
    value: "A",
  },
  {
    label: "Легковий автомобіль",
    value: "B",
  },
  {
    label: "Вантажний автомобіль",
    value: "C",
  },
  {
    label: "Автобус",
    value: "D",
  },
  {
    label: "Причеп",
    value: "EF",
  },
];


const SearchForm = () => {
  return <>
    <FormStyled>
      <InputStyled type="text" placeholder="Enter the text"></InputStyled>
    <SelectStyled
      classNamePrefix="customSelect"
      options={selectCategoryOptions}
        
    />
    <SelectStyled
      classNamePrefix="customSelect"
      options={selectCategoryOptions}
        
      />
    </FormStyled>
    </>
};

export default SearchForm;
