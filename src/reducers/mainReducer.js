const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    default:
      console.log(new Error("Context: Action type not provided."));
      return state;
  }
};

export const initialState = {
  hello: "Hello from ContextProvider!",
};

export default reducer;
