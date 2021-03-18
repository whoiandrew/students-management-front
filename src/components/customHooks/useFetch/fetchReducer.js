const reducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { loader: true, body: {} };
    case "LOADED":
      return { loader: false, body: action.body };
    default:
      return state;
  }
};

export default reducer;