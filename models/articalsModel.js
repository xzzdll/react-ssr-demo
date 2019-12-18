export default {
  name: "articals",
  reducer: (state = {}, action) => {
    switch (action.type) {
      case "articals:set":
        return { ...state, ...action.payload };
      default:
        return state;
    }
  },
};
