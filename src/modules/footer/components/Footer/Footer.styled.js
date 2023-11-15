import styled from 'styled-components'

export const StyledFooter = styled.footer`
	padding-top: 42px;
	@media screen and (min-width: 768px) {
	}
`
export const StyledFooterLogoNav = styled.div`
	display: flex;
	/* justify-content: space-between; */
`
export const StyledFooterLogo = styled.div`
	display: flex;
	gap: 14px;
	margin-bottom: 22px;
	margin-right: 100px;
`
export const StyledFooterIconLogo = styled.div`
	fill: ${({ theme }) => theme.button.ligth};
	width: 22px;
	height: 22px;
`
export const StyledFooterPrivacy = styled.div`
	color: ${({ theme }) => theme.colors.mainPage};
`
export const StyledFooterSpan = styled.div`
	color: rgba(243, 243, 243, 0.5);
	font-size: 12px;
	margin-bottom: 8px;
`
export const StyledFooterPrivacyBlock = styled.div`
	display: flex;
	gap: 14px;
`
export const StyledFooterPrivacyLink = styled.a`
	color: rgba(243, 243, 243, 0.5);
	font-size: 12px;
`
