import Title from '../../../../../shared/components/Title/Title'
import Coctail from '../picture/Coctail.png'
import { recipeData } from './RecipeData'
import { StyledRecipeBoxText, StyledRecipeDrinks, StyledRecipeImages, StyledRecipeText } from './RecipeDrinks.styled'

const RecipeDrinks = () => {
	return (
		<StyledRecipeDrinks>
			<div>
				<Title Title='Recipe Preparation' />
				{recipeData.map(item => (
					<StyledRecipeBoxText key={item.id}>
						<StyledRecipeText>{item.desc}</StyledRecipeText>
					</StyledRecipeBoxText>
				))}
			</div>
			<StyledRecipeImages src={Coctail} alt='Coctail' />
		</StyledRecipeDrinks>
	)
}
export default RecipeDrinks
