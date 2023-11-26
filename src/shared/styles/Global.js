import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
body {
  font-family: 'Manrope-400',  sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.mainText};
  background: ${({ theme }) => theme.background.main};
  transition: ${({ theme }) => theme.transition};
}

p,
h1,
h2,
h3,
h4,h5,h6 {
  padding: 0;
  margin: 0;
}

img {
  display: block;
   width:100%;
}

ul,li {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
  text-decoration: none;
}

button{&:hover {
    cursor: pointer;
  }}
  

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  text-align: center;
  gap: 24px;
  width: fit-content;
  padding: 14px 0;
  transition: margin 0.3s ease, width 0.3s ease; 
}

.page-num {
  display: flex;
  align-items: center;
  font-feature-settings: 'ss04' on;
  font-family: 'Manrope-500', sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  color: ${({ theme }) => theme.colors.mainPage};
  cursor: pointer;
  position: relative;

    &.active {
      /* margin: 0 10px; */
      padding-top: 1px;
      color: #F3F3F3;

      &:after {
        content: '';
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 27.8px;
        height: 27px;
        background-color: rgba(64, 112, 205, 0.5);
        border-radius: 50%;
        cursor: pointer;
        z-index: -1; 
      }
    }
}
`;
