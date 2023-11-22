import { useDispatch, useSelector } from 'react-redux';
import { SpriteSVG } from '../../../../shared/icons/SpriteSVG';
import {
  FormStyled,
  InputContStyled,
  InputStyled,
  SelectStyled,
} from './SerchForm.styled';
import { useEffect } from 'react';
import {
  getCategoriesThunk,
  getIngredientsThunk,
} from '../../../../redux/Filters/operations';
import {
  selectNormalizedCategories,
  selectNormalizedIngredients,
  selectSearchQuery,
} from '../../../../redux/Filters/selectors';
import {
  setCategory,
  setIngridient,
  setQuery,
} from '../../../../redux/Filters/filtersSlice';
import { getAllSearchThunk } from '../../../../redux/Drinks/operations';

const SearchForm = () => {
  const dispatch = useDispatch();

  const categories = useSelector(selectNormalizedCategories);
  const ingregients = useSelector(selectNormalizedIngredients);
  const { query, category, ingredient } = useSelector(selectSearchQuery);

  useEffect(() => {
    dispatch(getCategoriesThunk());
    dispatch(getIngredientsThunk({ page: 0, limit: 0 }));
  }, [dispatch]);

  const onSubmit = e => {
    e.preventDefault();
    dispatch(getAllSearchThunk({ query, category, ingredient }));
  };

  return (
    <>
      <FormStyled onSubmit={onSubmit}>
        <InputContStyled>
          <InputStyled
            type="text"
            placeholder="Enter the text"
            onChange={e => dispatch(setQuery(e.target.value))}
          ></InputStyled>
          <button type="submit">
            <SpriteSVG name="search" />
          </button>
        </InputContStyled>

        <SelectStyled
          classNamePrefix="customSelect"
          options={categories}
          onChange={e => dispatch(setCategory(e.label))}
        />
        <SelectStyled
          classNamePrefix="customSelect"
          options={ingregients}
          onChange={e => dispatch(setIngridient(e.value))}
        />
      </FormStyled>
    </>
  );
};

export default SearchForm;
