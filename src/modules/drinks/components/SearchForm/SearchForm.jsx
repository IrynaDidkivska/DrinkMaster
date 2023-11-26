import { useDispatch, useSelector } from 'react-redux';
import { SpriteSVG } from '../../../../shared/icons/SpriteSVG';
import {
  FormStyled,
  InputContStyled,
  SelectStyled,
  // StyledResetButton,
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

  let categories = useSelector(selectNormalizedCategories);
  let ingregients = useSelector(selectNormalizedIngredients);
  const { query, category, ingredient } = useSelector(selectSearchQuery);

  useEffect(() => {
    dispatch(getCategoriesThunk());
    dispatch(getIngredientsThunk());
  }, [dispatch]);

  const submitForm = () => {
    dispatch(
      getAllSearchThunk({
        query,
        category,
        ingredient,
        page: 0,
        limit: 0,
      })
    );
  };

  const onSubmit = e => {
    e.preventDefault();
    submitForm();
  };

  useEffect(() => {
    if (ingredient || category) {
      submitForm();
    }
  }, [ingredient, category]);

  return (
    <>
      <FormStyled onSubmit={onSubmit}>
        <InputContStyled>
          <input
            type="text"
            placeholder="Enter the text"
            value={query}
            onChange={e => dispatch(setQuery(e.target.value))}
          ></input>
          <button type="submit">
            <SpriteSVG name="search" />
          </button>
        </InputContStyled>

        <SelectStyled
          classNamePrefix="customSelect"
          placeholder="All categories"
          options={[{ label: 'All categories', value: '' }, ...categories]}
          onChange={e => {
            if (e.label === 'All categories') {
              return dispatch(setCategory(e.value));
            }
            return dispatch(setCategory(e.label));
          }}
        />
        <SelectStyled
          classNamePrefix="customSelect"
          placeholder="Ingredients"
          options={[{ label: 'All ingregients', value: '' }, ...ingregients]}
          onChange={e => dispatch(setIngridient(e.value))}
        />
      </FormStyled>
    </>
  );
};

export default SearchForm;
