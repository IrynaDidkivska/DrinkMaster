import { StyledLink, StyledNavBar } from './Navbar.styled'

const Navbar = () => {
	return (
		<StyledNavBar>
			<StyledLink>Home</StyledLink>
			<StyledLink>Drinks</StyledLink>
			<StyledLink>Add drink</StyledLink>
			<StyledLink>My drinks</StyledLink>
			<StyledLink>Favorites</StyledLink>
		</StyledNavBar>
	)
}

export default Navbar
