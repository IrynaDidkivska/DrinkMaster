import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import FollowUs from '@/shared/components/FollowUs/FollowUs';
import Modal from '@/shared/components/Modal/Modal';
import Logo from '@/shared/components/Logo/Logo';

import { SpriteSVG } from '@/shared/icons/SpriteSVG';
import { Container } from '@/shared/styles/Container';
import { useModal } from '@/hooks/useModal';
import { getPolicyThunk, getPublicThunk } from '@/redux/Drinks/operations';

import FootelLink from './FootelLink/FootelLink';
import SubscribeForm from './SubscribeForm/SubscribeForm';
import ModalContent from './ModalContent/ModalContent';

import { StyledContentTitle } from './ModalContent/ModalContent.styled';
import {
  OverlayBottom,
  OverlayDesctop,
  StyledBtnCloseFooter,
  StyledFooter,
  StyledFooterFirstBox,
  StyledFooterLogo,
  StyledFooterLogoNav,
  StyledFooterPrivacy,
  StyledFooterPrivacyBlock,
  StyledFooterSpan,
  StyledFooterTabletBox,
  StyledModalFooteer,
} from './Footer.styled';

const Footer = () => {
  const dispatch = useDispatch();
  const [termsData, setTermsData] = useState('');
  const [policyData, setPolicyData] = useState('');
  const [isPrivacyModalOpen, openPrivacy, closePrivacy] = useModal();
  const [isTermsModalOpen, openTerms, closeTerms] = useModal();

  useEffect(() => {
    const fetchData = async (thunkAction, setData) => {
      try {
        const data = await dispatch(thunkAction()).unwrap();
        setData(data);
      } catch (error) {
        console.error(`Error fetching data: ${error}`);
      }
    };
    fetchData(getPolicyThunk, setPolicyData);
    fetchData(getPublicThunk, setTermsData);
  }, [dispatch]);

  return (
    <StyledFooter>
      <Container>
        <StyledFooterTabletBox>
          <StyledFooterFirstBox>
            <StyledFooterLogoNav>
              <StyledFooterLogo>
                <Logo isfooter={true} />
              </StyledFooterLogo>
              <FollowUs isfooter={true} />
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
            <button onClick={openPrivacy}>Privacy Policy</button>
            <button onClick={openTerms}>Terms of Service</button>
          </StyledFooterPrivacyBlock>
        </StyledFooterPrivacy>
      </Container>
      <OverlayBottom />
      <OverlayDesctop />
      {isPrivacyModalOpen && (
        <Modal onClose={closePrivacy}>
          <StyledModalFooteer>
            <StyledContentTitle>Privacy Policy</StyledContentTitle>
            <StyledBtnCloseFooter onClick={closePrivacy}>
              <SpriteSVG name={'close'} />
            </StyledBtnCloseFooter>
            {ModalContent(policyData)}
          </StyledModalFooteer>
        </Modal>
      )}
      {isTermsModalOpen && (
        <Modal onClose={closeTerms}>
          <StyledModalFooteer>
            <StyledContentTitle>Public offering agreement</StyledContentTitle>
            <StyledBtnCloseFooter onClick={closeTerms}>
              <SpriteSVG name={'close'} />
            </StyledBtnCloseFooter>
            {ModalContent(termsData)}
          </StyledModalFooteer>
        </Modal>
      )}
    </StyledFooter>
  );
};

export default Footer;
