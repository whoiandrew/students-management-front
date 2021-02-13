const defaultState = {
  isLogged: false,
  loader: false
}

export const loginReducer = (state = defaultState, action) => {
  const {loader} = action;
  switch (action.type) {
    case "LOG_IN":
      return {isLogged: true, loader};
    case "LOG_OUT":
      return {isLogged: false, loader};;
    default:
      return state;
  }
};
