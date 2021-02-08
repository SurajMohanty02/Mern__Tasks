import axios from "axios";
export const createPost = (formData) => {
  return async (dispatch) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer`,
        },
      };
      const { data } = await axios.post("/contact", formData, config);
      console.log(data);
      // dispatch({ type: GET__DATA, paylod: data });
    } catch (error) {
      console.log(error);
    }
  };
};
