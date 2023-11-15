import styled from 'styled-components'

export const SubscribeFormStyled = styled.div`
	width: 335px;
	margin-bottom: 80px;
	@media screen and (min-width: 768px) {
	}
	width: 309px;
`
export const SubscribeTextStyled = styled.p`
	color: ${({ theme }) => theme.colors.mainText};
	align-items: center;
	margin-bottom: 24px;
`
export const SubscribeInputFormStyled = styled.form`
	display: flex;
	flex-direction: column;
`
export const SubscribeInputStyled = styled.input`
	color: ${({ theme }) => theme.colors.mainText};
	height: 54px;
	border-radius: 200px;
	border: 1px solid rgba(243, 243, 243, 0.2);
	opacity: 0.8;
	margin-bottom: 18px;
	padding-left: 24px;
	background: ${({ theme }) => theme.background.main};
`
export const SubscribeButtonStyled = styled.button`
	color: ${({ theme }) => theme.colors.mainText};
	height: 54px;
	border-radius: 200px;
	border: 1px solid rgba(243, 243, 243, 0.2);
	opacity: 0.8;
	background: ${({ theme }) => theme.background.main};
`
