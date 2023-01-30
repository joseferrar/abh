import { REACT_URL } from ".";
import { getCategory, getSubCategory } from "../features/categorySlice";

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

const getSubCategoryApi = (code, navigate) => {
  return (dispatch) => {
    REACT_URL.get(`/SubCategoryController/GetSubCategory?categoryCode=${code}`)
      .then((res) => {
        console.log(res.data);
        if (res.data.response?.length === 0) {
          navigate("/productDetails");
        } else {
          dispatch(getSubCategory(res.data.response));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export { getCategoryApi, getSubCategoryApi };
