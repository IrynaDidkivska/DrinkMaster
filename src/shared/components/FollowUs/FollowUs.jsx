import { SpriteSVG } from "../../icons/SpriteSVG";
import { StyledList, StyledSocLink } from "./FollowUs.styled";

const FollowUs = ({ isFooter }) => {
  return (
    <StyledList isFooter={isFooter}>
      <li>
        <StyledSocLink
          isFooter={isFooter}
          to="https://www.facebook.com/goITclub/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Go to GoIT Facebook page"
        >
          <SpriteSVG name={"facebook"} />
        </StyledSocLink>
      </li>
      <li>
        <StyledSocLink
          isFooter={isFooter}
          to="https://www.instagram.com/goitclub/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Go to GoIT Instagram page"
        >
          <SpriteSVG name={"instagram"} />
        </StyledSocLink>
      </li>
      <li>
        <StyledSocLink
          isFooter={isFooter}
          to="https://www.youtube.com/c/GoIT"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Go to GoIT Youtube channel"
        >
          <SpriteSVG name={"youtube"} />
        </StyledSocLink>
      </li>
    </StyledList>
  );
};

export default FollowUs;
