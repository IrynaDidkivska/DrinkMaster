export const switchBorderColor = (props) => {
  switch (true) {
    case props.$isError:
      return "#DA1414";
    case props.$isSuccess:
      return "#3CBC81";
    default:
      return "rgba(243, 243, 243, 0.2)";
  }
};
