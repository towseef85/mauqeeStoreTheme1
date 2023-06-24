import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import configureStore from "./redux/store";
import reportWebVitals from "./reportWebVitals";
import AppContextProvider from "./common/utilities/AppContextProviders";
import AppLocaleProvider from "./common/utilities/AppLocalProvider";
import AppThemeProvider from "./common/utilities/AppThemeProvider";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";

const store = configureStore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppContextProvider>
    <Provider store={store}>
    <AppThemeProvider>
      <AppLocaleProvider>
        <BrowserRouter>
            <Router/>
        </BrowserRouter>
      </AppLocaleProvider>
      </AppThemeProvider>
      </Provider>
    </AppContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
