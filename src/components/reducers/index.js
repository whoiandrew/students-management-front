import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { booksReducer } from "./books";
import { loginReducer } from "./isLogged";
import { registerReducer } from "./register";

const allReducers = combineReducers({
  login: loginReducer,
  auth: authReducer,
  books: booksReducer,
  register: registerReducer,
});

export default allReducers;
