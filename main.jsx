import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import App from "./src/App";
import "./index.css";
import "modern-normalize/modern-normalize.css";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./src/shared/styles/theme";
import { Global } from "./src/shared/styles/Global";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <BrowserRouter>
    <ThemeProvider theme={darkTheme}>
      <App />
      <ToastContainer autoClose={1800} />
      <Global />
    </ThemeProvider>
  </BrowserRouter>
  // </React.StrictMode>
);
