const initialState = {
  data: [],
};
const PostReducer = (state = initialState, action) => {
  switch (action.types) {
    case "Data":
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
};
export default PostReducer;
