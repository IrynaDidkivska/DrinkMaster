import FollowUs from '../../../../shared/components/FollowUs/FollowUs'
import Modal from '../../../../shared/components/Modal/Modal'
import { SpriteSVG } from '../../../../shared/icons/SpriteSVG'
import { Container } from '../../../../shared/styles/Container'
import FootelLink from './FootelLink/FootelLink'
import {
	OverlayBottom,
	StyledFooter,
	StyledFooterFirstBox,
	StyledFooterIconLogo,
	StyledFooterLogo,
	StyledFooterLogoNav,
	StyledFooterPrivacy,
	StyledFooterPrivacyBlock,
	StyledFooterSpan,
	StyledFooterTabletBox,
} from './Footer.styled'
import SubscribeForm from './SubscribeForm/SubscribeForm'
import { useNavigate } from 'react-router-dom'
import { useModal } from '../../../../hooks/useModal'

const Footer = () => {
	const navigate = useNavigate()
	const [isPrivacyModalOpen, openPrivacy, closePrivacy] = useModal()
	const [isTermsModalOpen, openTerms, closeTerms] = useModal()

	const handleClick = () => {
		navigate('/home')
	}
	return (
		<StyledFooter>
			<Container>
				<StyledFooterTabletBox>
					<StyledFooterFirstBox>
						<StyledFooterLogoNav>
							<StyledFooterLogo>
								<StyledFooterIconLogo onClick={handleClick}>
									<SpriteSVG name={'logo'} />
								</StyledFooterIconLogo>
								<span>Drink Master</span>
							</StyledFooterLogo>
							<FollowUs />
						</StyledFooterLogoNav>
						<FootelLink />
					</StyledFooterFirstBox>
					<SubscribeForm />
				</StyledFooterTabletBox>
				<StyledFooterPrivacy>
					<StyledFooterSpan>©2023 Drink Master. All rights reserved.</StyledFooterSpan>
					<StyledFooterPrivacyBlock>
						<button onClick={openPrivacy}>Privacy Policy</button>
						<button onClick={openTerms}>Terms of Service</button>
					</StyledFooterPrivacyBlock>
				</StyledFooterPrivacy>
			</Container>
			<OverlayBottom />
			{isPrivacyModalOpen && (
				<Modal onClose={closePrivacy}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, beatae! Veniam quaerat eveniet repudiandae
					error odit dolor nemo repellat quasi similique tempore! Amet aperiam quasi quidem voluptatum enim consectetur
					porro.
				</Modal>
			)}
			{isTermsModalOpen && (
				<Modal onClose={closeTerms}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti officia quidem, assumenda impedit, eius ad
					cumque earum consequatur odio voluptate soluta minus voluptatibus perferendis accusantium saepe unde animi
					expedita quos!
				</Modal>
			)}
		</StyledFooter>
	)
}

export default Footer
