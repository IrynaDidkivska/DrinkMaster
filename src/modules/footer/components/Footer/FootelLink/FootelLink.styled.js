import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledNavFooter = styled.nav`
	display: flex;
	flex-direction: column;
	gap: 14px;
	margin-bottom: 80px;
`

export const StyledLinkFooter = styled(Link)`
	font-family: 'Manrope-500', sans-serif;
	font-size: 14px;
	font-style: normal;
	font-weight: 500;
	line-height: 22.4px;
	color: ${({ theme }) => theme.colors.mainText};
	background: transparent;

	&:hover,
	&:focus {
		cursor: pointer;
		transition: ${({ theme }) => theme.transition};
	}

	&:active {
		color: ${({ theme }) => theme.colors.mainText};
		background: ${({ theme }) => theme.background.dropdown};
	}
`
