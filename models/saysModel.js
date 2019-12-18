export default {
  name: "says",
  reducer: (state = {}, action) => {
    switch (action.type) {
      case "says:set":
        return { ...state, ...action.payload };
      default:
        return state;
    }
  }
};
