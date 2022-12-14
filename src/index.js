import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from './App';
import "./index.css"
import { Provider } from "react-redux";
import {store, persistor} from "./components/redux/Store";
import { PersistGate } from 'redux-persist/integration/react'

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>

    <App />
    </PersistGate>

  </Provider>
);
