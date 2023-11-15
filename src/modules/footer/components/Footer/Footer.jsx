import FollowUs from '../../../../shared/components/FollowUs/FollowUs'
import { SpriteSVG } from '../../../../shared/icons/SpriteSVG'
import {
	StyledFooter,
	StyledFooterIconLogo,
	StyledFooterLogo,
	StyledFooterLogoNav,
	StyledFooterPrivacy,
	StyledFooterPrivacyBlock,
	StyledFooterPrivacyLink,
	StyledFooterSpan,
} from './Footer.styled'
import SubscribeForm from './SubscribeForm'

const Footer = () => {
	return (
		<StyledFooter>
			<StyledFooterLogoNav>
				<StyledFooterLogo>
					<StyledFooterIconLogo>
						<SpriteSVG name={'logo'} />
					</StyledFooterIconLogo>
					<span>Drink Master</span>
				</StyledFooterLogo>
				<p>Nav</p>
			</StyledFooterLogoNav>
			<FollowUs />
			<SubscribeForm />
			<StyledFooterPrivacy>
				<StyledFooterSpan>©2023 Drink Master. All rights reserved.</StyledFooterSpan>
				<StyledFooterPrivacyBlock>
					<StyledFooterPrivacyLink href='#'>Privacy Policy</StyledFooterPrivacyLink>
					<StyledFooterPrivacyLink href='#'>Terms of Service</StyledFooterPrivacyLink>
				</StyledFooterPrivacyBlock>
			</StyledFooterPrivacy>
		</StyledFooter>
	)
}

export default Footer
