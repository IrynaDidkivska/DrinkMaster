import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import App from "./src/App";
import "./index.css";
import "modern-normalize/modern-normalize.css";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./src/shared/styles/theme";
import { Global } from "./src/shared/styles/Global";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { persistor, store } from "./src/redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <PersistGate loading={null} persistor={persistor}>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={darkTheme}>
          <App />
          <ToastContainer autoClose={1800} />
          <Global />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </PersistGate>
);
