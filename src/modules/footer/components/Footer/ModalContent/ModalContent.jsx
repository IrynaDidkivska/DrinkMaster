import { StyledContent, StyledModalContent } from './ModalContent.styled'

const ModalContent = data => {
	return data ? (
		<StyledModalContent>
			{data.map((item, id) => (
				<StyledContent key={id}>{item[`paragraph${id + 1}`]}</StyledContent>
			))}
		</StyledModalContent>
	) : (
		'Loading...'
	)
}

export default ModalContent
