import { REACT_URL } from ".";
import { getProductDetails, getProductList } from "../features/productSlice";

const getProductListApi = (catCode, subCateCode) => {
  return (dispatch) => {
    REACT_URL.get(`/ProductController/GetPrdoucts?categoryCode=${catCode}&subCategoryCode=${subCateCode}`)
      .then((res) => {
        dispatch(getProductList(res.data.response));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const getProductDetailApi = (catCode, productCode) => {
  return (dispatch) => {
    REACT_URL.get(
      `/ProductController/GetProductAllDetails?categoryCode=${catCode}&prodCode=${productCode}&customerCode=0`
    )
      .then((res) => {
        dispatch(getProductDetails(res.data.response));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const CreateProdOptSelect = (data) => {
  return (dispatch) => {
    REACT_URL.post(`/ProductController/CreateProdOptSelect`, data).then(
      (res) => {
        dispatch(getProductDetails(res.data.response));
      }
    );
  };
};

export { getProductListApi, getProductDetailApi, CreateProdOptSelect };
