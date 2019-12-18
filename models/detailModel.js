export default {
  name: "detail",
  reducer: (state = {}, action) => {
    switch (action.type) {
      case "detail:set":
        return { ...state, ...action.payload };
      default:
        return state;
    }
  }
};
