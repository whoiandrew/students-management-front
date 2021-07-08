import React from "react";
import ReactDOM from "react-dom";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore, persistReducer } from 'redux-persist'
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import allReducers from "./components/reducers/index";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: "root",
  storage 
}

const persistedReducer = persistReducer(persistConfig, allReducers)
const store = createStore(persistedReducer, composeWithDevTools());
const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
