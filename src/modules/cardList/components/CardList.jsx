import { FavNotAdd } from "../../../pages/Favorites/FavNotAdd/FavNotAdd";

import { List } from "./CardsList.styled";
import Card from "../../../shared/components/Card/Card";

const CardList = ({ data }) => {
  return (
    <List>
      {data.length === 0 ? (
        <FavNotAdd />
      ) : (
        data.map((favorite) => <Card key={favorite._id} data={favorite} />)
      )}
    </List>
  );
};

export default CardList;
