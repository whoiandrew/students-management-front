const defaultState = {
  username: "",
  password: "",
};

export const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "USERNAME":
      return { ...state, username: action.value };
    case "PASSWORD":
      return { ...state, password: action.value };
    default:
      return state;
  }
};
