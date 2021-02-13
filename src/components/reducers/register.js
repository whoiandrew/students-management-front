const defaultState = {
  username: "",
  password: "",
  confirmPassword: "",
};

export const registerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "REG_USERNAME":
      return { ...state, username: action.value };
    case "REG_PASSWORD":
      return { ...state, password: action.value };
    case "REG_CONFIRM_PASSWORD":
      return { ...state, confirmPassword: action.value };
    case "RESET":
      return defaultState;
    default:
      return state;
  }
};
