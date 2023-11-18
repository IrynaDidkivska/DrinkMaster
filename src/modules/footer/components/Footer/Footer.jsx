import FollowUs from '../../../../shared/components/FollowUs/FollowUs'
// import Navbar from '../../../../shared/components/Navbar/Navbar'
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
	StyledFooterPrivacyLink,
	StyledFooterSpan,
	StyledFooterTabletBox,
} from './Footer.styled'
import SubscribeForm from './SubscribeForm/SubscribeForm'

const Footer = () => {
	return (
		<StyledFooter>
			<Container>
				<StyledFooterTabletBox>
					<StyledFooterFirstBox>
						<StyledFooterLogoNav>
							<StyledFooterLogo>
								<StyledFooterIconLogo>
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
						<StyledFooterPrivacyLink href='#'>Privacy Policy</StyledFooterPrivacyLink>
						<StyledFooterPrivacyLink href='#'>Terms of Service</StyledFooterPrivacyLink>
					</StyledFooterPrivacyBlock>
				</StyledFooterPrivacy>
			</Container>
			<OverlayBottom />
		</StyledFooter>
	)
}

export default Footer
