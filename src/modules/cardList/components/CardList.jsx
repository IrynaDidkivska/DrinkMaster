import Card from '@/shared/components/Card/Card';

import { List } from './CardsList.styled';

const CardList = ({ data }) => {
  return (
    <List>
      {data.map((item, index) => (
        <Card key={item._id ? item._id : `card-${index}`} data={item} />
      ))}
    </List>
  );
};

export default CardList;
