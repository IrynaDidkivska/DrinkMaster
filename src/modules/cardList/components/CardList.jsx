import { List } from './CardsList.styled';
import Card from '../../../shared/components/Card/Card';
import { NotAdd } from '../../../shared/components/NotAdd/NotAdd';

const CardList = ({ data }) => {
  return (
    <List>
      {data.length === 0 ? (
        <NotAdd />
      ) : (
        data.map((item, index) => (
          <Card key={item._id ? item._id : `card-${index}`} data={item} />
        ))
      )}
    </List>
  );
};

export default CardList;
