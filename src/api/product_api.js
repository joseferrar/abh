import { REACT_URL } from ".";
import { getProductDetails } from "../features/productSlice";

const getProductDetailApi = () => {
  return (dispatch) => {
    REACT_URL.get(
      `/ProductController/GetProductAllDetails?categoryCode=HOSP&prodCode=6000&customerCode=1`
    )
      .then((res) => {
        dispatch(getProductDetails(res.data.response));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export { getProductDetailApi };
