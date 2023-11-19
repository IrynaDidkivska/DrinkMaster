import Title from '../../../../../shared/components/Title/Title'
import Caipirinha from '../picture/Caipirinha.png'
import {
	OverlayJustLeft,
	OverlayJustRight,
	StyledJustButton,
	StyledJustDrinks,
	StyledJustImages,
	StyledJustSpan,
	StyledJustText,
} from './MyJustDrinks.styled'

const MyJustDrinks = () => {
	return (
		<StyledJustDrinks>
			<div>
				<Title Title='Just a Moonmint' />
				<StyledJustSpan>Highball glass / Non alcoholic</StyledJustSpan>
				<StyledJustText>
					Just a Moonmint is a refreshing and minty cocktail that combines the flavors of vodka, lime juice, and mint
					syrup. It is made by shaking vodka, lime juice, mint syrup, and ice together and straining it into a glass.
				</StyledJustText>
				<StyledJustButton>Add to favorite drinks</StyledJustButton>
			</div>
			<StyledJustImages src={Caipirinha} alt='Caipirinha' />
			<OverlayJustLeft />
			<OverlayJustRight />
		</StyledJustDrinks>
	)
}

export default MyJustDrinks
