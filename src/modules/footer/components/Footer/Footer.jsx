import FollowUs from "../../../../shared/components/FollowUs/FollowUs";
// import Navbar from '../../../../shared/components/Navbar/Navbar'
import { SpriteSVG } from "../../../../shared/icons/SpriteSVG";
import { Container } from "../../../../shared/styles/Container";
import FootelLink from "./FootelLink/FootelLink";
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
} from "./Footer.styled";
import SubscribeForm from "./SubscribeForm/SubscribeForm";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/home");
  };
  return (
    <StyledFooter>
      <Container>
        <StyledFooterTabletBox>
          <StyledFooterFirstBox>
            <StyledFooterLogoNav>
              <StyledFooterLogo>
                <StyledFooterIconLogo onClick={handleClick}>
                  <SpriteSVG name={"logo"} />
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
          <StyledFooterSpan>
            ©2023 Drink Master. All rights reserved.
          </StyledFooterSpan>
          <StyledFooterPrivacyBlock>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </StyledFooterPrivacyBlock>
        </StyledFooterPrivacy>
      </Container>
      <OverlayBottom />
    </StyledFooter>
  );
};

export default Footer;
