import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Grid from "@mui/material/Grid";
import { Breadcrumbs, Container } from "@mui/material";
import "../App.css";
import { getCategoryApi } from "../api/category_api";
import ProductListNav from "../components/Drawers/ProductListNav";
import ProductCard from "../components/Cards/ProductCard";
import EmailSection from "../components/Sections/EmailSection";
import FooterSection from "../components/Sections/FooterSection";
import BottomSection from "../components/Sections/BottomSection";
import { useLocation } from "react-router-dom";
import { getProductListApi } from "../api/product_api";

const classes = {
  root: {
    flexGrow: 1,
    marginTop: 30,
  },
  wraper_main: {
    display: "flex",
  },
  section: {
    padding: 20,
    color: "#000",
  },
  transbox: {
    position: "relative",
    backgroundColor: "#000",
    color: "#fff",
  },
};

const ProductLists = () => {
  const location = useLocation();
  const { productList } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const { categories } = location.state;
  const [idx, setIdx] = useState(
    categories?.subCategory?.subCategory?.subCategoryCode
  );

  const optionClick = (event) => {
    setIdx(event);
  };
  useEffect(() => {
    dispatch(getProductListApi(categories?.category?.categoryCode, idx));
  }, [idx]);

  console.log(location.state);
  
  return (
    // <ProductListNav />
    <div style={classes.root}>
      <div style={classes.wraper_main}>
        <ProductListNav
          category={categories?.category}
          idx={idx}
          optionClick={optionClick}
        />

        <Grid container spacing={3}>
          <Container maxWidth="xl">
            <Grid container spacing={3} marginTop={3}>
              {productList &&
                productList.map((product, index) => (
                  <ProductCard
                    data={product}
                    index={index}
                    categoryCode={categories?.category?.categoryCode}
                    subCategory={categories?.subCategory?.subCategory}
                  />
                ))}
            </Grid>
          </Container>
        </Grid>
      </div>
      <EmailSection />
      <FooterSection />
      <BottomSection />
    </div>
  );
};

export default ProductLists;
