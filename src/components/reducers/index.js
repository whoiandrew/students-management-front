import {combineReducers} from "redux";
import { authReducer } from "./auth";
import { booksReducer } from "./books";
import {counterReducer} from "./counter";
import {isLoggedReducer} from "./isLogged";

const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: isLoggedReducer,
  auth: authReducer,
  books: booksReducer
})

export default allReducers;