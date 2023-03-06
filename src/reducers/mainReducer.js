const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_USER":
      return {
        ...state,
        ...payload,
      };
    case "EDIT_USER_FIELD":
      return {
        ...state,
        user: {
          ...state.user,
          [payload.field]: payload.value,
        },
      };
    default:
      console.log(new Error("Context: Action type not provided."));
      return state;
  }
};

export const initialState = {
  hello: "Hello from ContextProvider!",
};

export default reducer;
