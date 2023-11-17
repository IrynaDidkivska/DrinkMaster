import FollowUs from '../../../../shared/components/FollowUs/FollowUs'
import { SpriteSVG } from '../../../../shared/icons/SpriteSVG'
import {
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
import SubscribeForm from './SubscribeForm'

const Footer = () => {
	return (
		<StyledFooter>
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
					<p>Nav</p>
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
		</StyledFooter>
	)
}

export default Footer
