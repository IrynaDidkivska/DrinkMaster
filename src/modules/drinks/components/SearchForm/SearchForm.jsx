import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import {
  getCategoriesThunk,
  getIngredientsThunk,
} from '@/redux/Filters/operations';
import {
  setCategory,
  setIngridient,
  setQuery,
} from '@/redux/Filters/filtersSlice';
import {
  selectNormalizedCategories,
  selectNormalizedIngredients,
} from '@/redux/Filters/selectors';
import { SpriteSVG } from '@/shared/icons/SpriteSVG';

import { FormStyled, InputContStyled, SelectStyled } from './SerchForm.styled';

const SearchForm = () => {
  const dispatch = useDispatch();
  const [queryStr, setQueryStr] = useState('');
  console.log(queryStr);
  let categories = useSelector(selectNormalizedCategories);
  let ingregients = useSelector(selectNormalizedIngredients);

  useEffect(() => {
    dispatch(getCategoriesThunk());
    dispatch(getIngredientsThunk());
  }, [dispatch]);

  const onSubmit = e => {
    e.preventDefault();
    dispatch(setQuery(queryStr));
  };

  return (
    <>
      <FormStyled onSubmit={onSubmit}>
        <InputContStyled>
          <input
            type="text"
            placeholder="Enter the text"
            value={queryStr}
            onChange={e => setQueryStr(e.target.value)}
          ></input>
          <button type="button">
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
