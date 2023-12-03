import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import {
  getCategoriesThunk,
  getIngredientsThunk,
} from '@/redux/Filters/operations';
import {
  setCategory,
  setIngridient,
  setPage,
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

  // const handleChangeIngridient = e => {
  //   dispatch(setIngridient(e.value));
  //   dispatch(setPage(1));
  // };

  //TODO розбити на дві функції
  const handleOptionChange = (e, option) => {
    if (option === 'ing') {
      dispatch(setIngridient(e.value));
      dispatch(setPage(1));
    }
    if (option === 'cat') {
      if (e.label === 'All categories') {
        dispatch(setCategory(e.value));
        dispatch(setPage(1));
        return;
      }
      dispatch(setCategory(e.label));
      dispatch(setPage(1));
    }
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
          <button type="submit">
            <SpriteSVG name="search" />
          </button>
        </InputContStyled>

        <SelectStyled
          classNamePrefix="customSelect"
          placeholder="All categories"
          options={[{ label: 'All categories', value: '' }, ...categories]}
          onChange={e => handleOptionChange(e, 'cat')}
        />
        <SelectStyled
          classNamePrefix="customSelect"
          placeholder="Ingredients"
          options={[{ label: 'All ingregients', value: '' }, ...ingregients]}
          onChange={e => handleOptionChange(e, 'ing')}
        />
      </FormStyled>
    </>
  );
};

export default SearchForm;
