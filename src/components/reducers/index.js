import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { loginReducer } from "./isLogged";
import { registerReducer } from "./register";

const allReducers = combineReducers({
  login: loginReducer,
  auth: authReducer,
  register: registerReducer,
});

export default allReducers;
