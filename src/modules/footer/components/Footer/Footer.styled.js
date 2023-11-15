import styled from 'styled-components'

export const StyledFooter = styled.footer`
	padding-top: 42px;
	@media screen and (min-width: 768px) {
		padding-top: 83px;
	}
	@media screen and (min-width: 1440px) {
	}
`
export const StyledFooterTabletBox = styled.div`
	@media screen and (min-width: 768px) {
		display: flex;
		justify-content: space-between;
	}
	@media screen and (min-width: 768px) {
		justify-content: space-between;
	}
`
export const StyledFooterFirstBox = styled.div`
	display: flex;
	@media screen and (min-width: 768px) {
		flex-direction: column;
	}
	@media screen and (min-width: 1440px) {
		justify-content: space-between;
		flex-direction: row;
		width: 50%;
	}
`
export const StyledFooterLogoNav = styled.div`
	display: flex;
	flex-direction: column;
	@media screen and (min-width: 768px) {
	}
`
export const StyledFooterLogo = styled.div`
	display: flex;
	gap: 14px;
	margin-bottom: 22px;
	@media screen and (min-width: 768px) {
		margin-bottom: 30px;
	}
`
export const StyledFooterIconLogo = styled.div`
	fill: ${({ theme }) => theme.button.ligth};
	width: 22px;
	height: 22px;
`
export const StyledFooterPrivacy = styled.div`
	color: ${({ theme }) => theme.colors.mainPage};
	@media screen and (min-width: 768px) {
		display: flex;
		justify-content: space-between;
	}
`
export const StyledFooterSpan = styled.div`
	color: rgba(243, 243, 243, 0.5);
	font-size: 12px;
	margin-bottom: 8px;
	@media screen and (min-width: 768px) {
		font-size: 14px;
	}
`
export const StyledFooterPrivacyBlock = styled.div`
	display: flex;
	gap: 14px;
	@media screen and (min-width: 768px) {
		gap: 18px;
		margin-right: 102px;
	}
`
export const StyledFooterPrivacyLink = styled.a`
	color: rgba(243, 243, 243, 0.5);
	font-size: 12px;
	@media screen and (min-width: 768px) {
		font-size: 14px;
	}
`
