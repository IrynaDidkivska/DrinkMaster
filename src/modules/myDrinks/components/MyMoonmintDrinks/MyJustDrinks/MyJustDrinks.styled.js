import styled from 'styled-components'

export const StyledJustDrinks = styled.div`
	position: relative;
	margin-bottom: 80px;
	@media screen and (min-width: 1440px) {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
`
export const StyledJustSpan = styled.span`
	font-size: 12px;
	color: rgba(243, 243, 243, 0.5);
	margin-bottom: 20px;
`
export const StyledJustText = styled.p`
	padding-top: 20px;
	margin-bottom: 40px;
	@media screen and (min-width: 1440px) {
		width: 593px;
	}
`
export const StyledJustButton = styled.button`
	padding: 14px 40px;
	border-radius: 42px;
	background: #f3f3f3;
	margin-bottom: 80px;
`
export const StyledJustImages = styled.img`
	@media screen and (min-width: 1440px) {
		width: 400px;
		height: 400px;
		margin-top: 132px;
	}
`

export const OverlayJustLeft = styled.div`
	position: absolute;
	pointer-events: none;
	z-index: -1;
	width: 520px;
	height: 550px;
	left: -380px;
	bottom: 200px;
	border-radius: 550px;
	background: rgba(64, 112, 205, 0.5);
	filter: blur(104.8543701171875px);

	@media screen and (min-width: 768px) {
		bottom: 600px;
	}
	@media screen and (min-width: 1440px) {
		bottom: 40px;
	}
`
export const OverlayJustRight = styled.div`
	@media screen and (min-width: 1440px) {
		position: absolute;
		pointer-events: none;
		z-index: -1;
		width: 549px;
		height: 543px;
		right: -480px;
		bottom: -240px;
		border-radius: 549px;
		background: rgba(64, 112, 205, 0.5);
		filter: blur(104.8543701171875px);
	}
`
