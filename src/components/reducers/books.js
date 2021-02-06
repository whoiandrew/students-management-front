export const booksReducer = (state = [], action) => {
  switch (action.type) {
    case "SETBOOKS":
      return action.books;
    default:
      return state;
  }
};
