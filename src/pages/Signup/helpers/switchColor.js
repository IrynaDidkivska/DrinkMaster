export const switchBorderColor = (props) => {
  switch (true) {
    case props.$isError:
      return "red";
    case props.$isSuccess:
      return "green";
    default:
      return "rgba(243, 243, 243, 0.2)";
  }
};
