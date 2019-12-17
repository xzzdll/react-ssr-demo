export default {
  name: "visitors",
  reducer: (state = '', action) => {
    switch (action.type) {
      case "visitors:set":
        state = action.payload;
        return state
      default:
        return state;
    }
  }
};
