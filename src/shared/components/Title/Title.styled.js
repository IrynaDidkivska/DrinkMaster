import { styled } from 'styled-components'

export const StyledTitle = styled.h1`

  padding: 80px 32px 14px 0px;
  font-family: "Manrope-600", sans-serif;
  font-size: 32px;
  line-height: 38px;
  color: ${({ theme }) => theme.colors.mainText};


	@media screen and (min-width: 768px) {
		font-size: 56px;
		line-height: 60px;
	}
	@media screen and (min-width: 1440px) {
		font-size: 64px;
		line-height: 68px;
	}
`
