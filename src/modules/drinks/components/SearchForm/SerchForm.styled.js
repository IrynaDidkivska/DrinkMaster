
import Select from "react-select";
import styled from "styled-components";

export const FormStyled = styled("form")`
width: 100%;
display: flex;
flex-direction: column;
gap: 14px;
 @media (min-width: 768px) {
    width: 678px;
    flex-direction: row;
    gap:8px;
}

`
export const InputStyled = styled("input")`
width: 100%;
height: 54px;
padding: 18px 24px;
background: transparent;
border-radius: 200px;
border: 1px solid rgba(243, 243, 243, 0.20);
outline: none;
opacity: 0.8;
color:${({ theme }) => theme.colors.mainText};
font-family: "Manrope-400";
font-size: 14px;
font-weight: 400;
line-height: 1.28; /* 128.571% */
&::after{
    display: none;
    
}
&::placeholder {
    color:${({ theme }) => theme.colors.mainText};
    font-family: "Manrope-400";
    font-size: 14px;
    font-weight: 400;
    line-height: 1.28; /* 128.571% */
}
 @media (min-width: 768px) {
    width: 264px;
    height: 56;
}

`

export const SelectStyled = styled(Select)`
   .customSelect__ {
    &control {
      color:${({ theme }) => theme.colors.mainText}; //#F3F3F3
      font-family: "Manrope-400";
      font-size: 14;
      font-weight: 400;
      line-height: 1.28;
      width: 100%;
      padding: 18px 24px;
      height: 54;
      border-radius: 200px;
      background-color: ${({ theme }) => theme.colors.secondaryText};//#161F37
      /* background-color: transparent; */
      border: none;
      outline: none;
     
      &:hover, &:focus {
        border: none;
        cursor: pointer;
      }
      &--is-focused {
        background-color: none;
        border: none;
        outline: none;
         outline-color: transparent;
      }
      & svg {
        transition: transform 200ms ease-in-out;
        stroke:${({ theme }) => theme.colors.mainText};

      }
      &--menu-is-open {
        & svg {

        }
      }
      &--is-disabled {
        opacity: 0.4;
        background-color: black;
      }
    @media (min-width: 768px) {
        width: 199px;

    }
       
    }
    &value-container {
      height: 23;
      padding: 0;
    }
    &placeholder {
      color:${({ theme }) => theme.colors.mainText};
      /* font-family: "Manrope-400";
      font-size: 14;
      font-weight: 400;
      line-height: 128%; */
    }
    &single-value {
      color: ${({ theme }) => theme.colors.mainText};
      padding: 0;
    }
    &indicators {
      height: 24;
      padding: 0;
      & svg {
        width: 24;
        height: 24;
        fill:${({ theme }) => theme.colors.mainText};
      }
    }
    &input-container {
      color: ${({ theme }) => theme.colors.secondaryText};
      height: 18;
      margin: 0;
      padding: 0;
    }
    &indicator-separator {
      display: none;
    }
    &dropdown-indicator {
      padding: 0;
      & svg {
        width: 24;
        height: 24;
      }
    }
    &menu {
      margin-top: 4;
      border-radius: 12;
      background-color: #161F37;
      padding: 10;
      font-family: "Manrope-400";
      font-size: 14;
      font-weight: 400;
      line-height: 128%;
      @media (min-width: 768px) {
        width: 199px;
    }
    }
    &menu-list {
      padding: 4;
    }
    &option {
      cursor: pointer;
      color: ${({ theme }) => theme.colors.mainText};
      background: none;
      &--is-focused, &:active, &--is-selected {
        background-color: none;
        color: #4070CD;
      }
      &:active {
        background-color: transparent;
      }
    }


    
  }
`;