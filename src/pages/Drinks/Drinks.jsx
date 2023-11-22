import SearchForm from "../../modules/drinks/components/SearchForm/SearchForm";
import Title from "../../shared/components/Title/Title";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { getAllSearchThunk } from "../../redux/Drinks/operations";

import DrinkList from "../../shared/components/DrinkList/DrinkList";

const Drinks = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllSearchThunk());
  }, [dispatch]);

  return (
    <div>
      <Title Title="Drinks" />
      <SearchForm />
      <DrinkList />
    </div>
  );
};

export default Drinks;
