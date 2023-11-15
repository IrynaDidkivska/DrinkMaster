import { useState } from 'react'
import {
	SubscribeButtonStyled,
	SubscribeFormStyled,
	SubscribeInputFormStyled,
	SubscribeInputStyled,
	SubscribeTextStyled,
} from './SubscribeForm.styled'

const SubscribeForm = () => {
	const [email, setEmail] = useState('')

	const subscribe = event => {
		event.preventDefault()
	}
	return (
		<SubscribeFormStyled>
			<SubscribeTextStyled>
				Subscribe up to our newsletter. Be in touch with latest news and special offers, etc.
			</SubscribeTextStyled>
			<SubscribeInputFormStyled onSubmit={subscribe}>
				<SubscribeInputStyled
					type='email'
					id='email'
					name='email'
					placeholder='Enter the email'
					value={email}
					onChange={e => setEmail(e.target.value)}
				/>
				<SubscribeButtonStyled type='submit'>Subscribe</SubscribeButtonStyled>
			</SubscribeInputFormStyled>
		</SubscribeFormStyled>
	)
}

export default SubscribeForm
