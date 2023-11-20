import { DrinkListID } from '../../shared/components/DrinkList/DrinkListId'
import Title from '../../shared/components/Title/Title'
import { FavNotAdd } from './FavNotAdd/FavNotAdd'

const DrinksListFav = () => {
	return (
		<>
			<Title Title='Favorites' />
			<DrinkListID />
			<FavNotAdd />
		</>
	)
}

export default DrinksListFav
