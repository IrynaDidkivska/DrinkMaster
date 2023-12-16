import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {
  getCategoriesThunk,
  getIngredientsThunk,
} from '@/redux/Filters/operations';

import {
  selectNormalizedCategories,
  selectNormalizedIngredients,
} from '@/redux/Filters/selectors';
import { SpriteSVG } from '@/shared/icons/SpriteSVG';

import { FormStyled, InputContStyled, SelectStyled } from './SerchForm.styled';
import { useSearchParams } from 'react-router-dom';

const SearchForm = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  let categories = useSelector(selectNormalizedCategories);
  let ingregients = useSelector(selectNormalizedIngredients);
  let allParams = Object.fromEntries(searchParams);

  for (const key of Object.keys(allParams)) {
    searchParams.get(key)
      ? (allParams[key] = searchParams.get(key))
      : delete allParams[key];
  }

  const [queryStr, setQueryStr] = useState(allParams.query || '');

  useEffect(() => {
    dispatch(getCategoriesThunk());
    dispatch(getIngredientsThunk());
  }, [dispatch]);

  const onSubmit = e => {
    e.preventDefault();
    if (queryStr) {
      setSearchParams({ ...allParams, query: queryStr, page: 1 });
    } else {
      delete allParams.query;
      setSearchParams(allParams);
    }
  };

  //TODO розбити на дві функції
  const handleOptionChange = (e, option) => {
    if (option === 'ing') {
      if (!e.value) {
        delete allParams.ingredient;
        setSearchParams(allParams);
      } else {
        setSearchParams({ ...allParams, ingredient: e.value, page: 1 });
      }
    }
    if (option === 'cat') {
      if (!e.value) {
        delete allParams.category;
        setSearchParams(allParams);
      } else {
        setSearchParams({ ...allParams, category: e.label, page: 1 });
      }
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
          value={
            allParams.category
              ? categories.find(
                  category => category.label === allParams.category
                )
              : { label: 'All categories', value: '' }
          }
          options={[{ label: 'All categories', value: '' }, ...categories]}
          onChange={e => handleOptionChange(e, 'cat')}
        />
        <SelectStyled
          classNamePrefix="customSelect"
          placeholder="Ingredients"
          value={
            allParams.ingredient
              ? ingregients.find(
                  ingredient => ingredient.value === allParams.ingredient
                )
              : { label: 'All ingregients', value: '' }
          }
          options={[{ label: 'All ingregients', value: '' }, ...ingregients]}
          onChange={e => handleOptionChange(e, 'ing')}
        />
      </FormStyled>
    </>
  );
};

export default SearchForm;
