import { REACT_URL } from ".";
import { getCategory } from "../features/categorySlice";

const getCategoryApi = () => {
  return (dispatch) => {
    REACT_URL.get(`/CategoryController/GetCategory`)
      .then((res) => {
        dispatch(getCategory(res.data.response));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export { getCategoryApi };
