import { useState } from "react";
import PropTypes from "prop-types";
import {
  ButtonSeeMore,
  PopularContainerDiscr,
  PopularDiskr,
  PopularName
} from "./PopularDrinks.styled";

const ExpandableText = ({ initialText }) => {
  const [expanded, setExpanded] = useState(false);
  const [text, setText] = useState(initialText);

  const handleToggle = () => {
    setExpanded(!expanded);
    setText(expanded ? initialText : `${initialText}...`);
  };

  return (
    <PopularContainerDiscr expanded={expanded}>
      <PopularName>A Furlong Too Late</PopularName>
      <PopularDiskr expanded={expanded}>{text}</PopularDiskr>
      <ButtonSeeMore onClick={handleToggle}>{!expanded ? "More" : "Less"}</ButtonSeeMore>
    </PopularContainerDiscr>
  );
};

ExpandableText.propTypes = {
  initialText: PropTypes.string.isRequired,
};

export default ExpandableText;