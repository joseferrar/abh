import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ArrowLeft from "../packages/images/ArrowLeft.png";
import { Button, Container, Typography } from "@mui/material";
import a110 from "../packages/images/a110.png";
import "../App.css";
import Breadcrumbs from "../components/Breadcrumbs/index";
import { getCategoryApi } from "../api/category_api";
import EmailSection from "../components/Sections/EmailSection";
import FooterSection from "../components/Sections/FooterSection";
import BottomSection from "../components/Sections/BottomSection";

//create our styles
const classes = {
  root: {
    flexGrow: 1,
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
  project_img: {
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    width: 200,
    height: 220,
  },
  project_text: {
    fontFamily: "outfit-regular",
    fontWeight: 600,
    fontSize: 20,
    marginTop: 30,
  },
  button_text: {
    fontFamily: "outfit-regular",
    fontWeight: 500,
    fontSize: 18,
    textTransform: "capitalize",
    color: "#C42335",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
  },
};

function ProductPage() {
  const navigate = useNavigate();
  const [hover, setHover] = useState({});

  const mouseOver = (event, index) => {
    setHover((c) => {
      return {
        ...c,
        [index]: true,
      };
    });
  };

  const mouseOut = (event, index) => {
    setHover((c) => {
      return {
        ...c,
        [index]: false,
      };
    });
  };

  const { categories } = useSelector((state) => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategoryApi());
  }, []);

  console.log(categories);
  return (
    <div style={classes.root}>
      <Grid container spacing={3} marginTop={-14}>
        {/*Create items with different breakpoints */}
        {/*For example,This item will be 12 units wide on extra small screens */}
        <Grid item xs={12}>
          <div style={classes.transbox}>
            <div className="abh-products-banner">
              <div className="abh-products-text">
                <h1>ABH PRODUCTS</h1>
                <p>
                  Architectural Builders Hardware Mfg. Inc. (ABH) is a high
                  quality manufacturer of Overhead Door Holders & Stops,
                  Hospital Push Pull Latches, Magnetic Door Holders, Pivot Sets,
                  Strikes and Door Rescue Stops, Continuous Aluminum Hinges,
                  Continuous Stainless Steel Hinges, Coordinators, Flush Bolts,
                  Power Wire Transfers, and Roller Latches.
                </p>
              </div>
            </div>
          </div>
        </Grid>

        <Container maxWidth="xl">
          <Grid container spacing={3}>
            <Grid item xs={12} md={12} sm={5} marginTop={3}>
              <Breadcrumbs />
            </Grid>
            {categories &&
              categories.map((category, index) => (
                <Grid
                  item
                  xs={12}
                  md={2.8}
                  sm={5}
                  key={index}
                  marginTop={8}
                  onClick={() =>
                    navigate(`/products/${category?.categoryDesc}`, {
                      state: { category },
                    })
                  }
                  style={{
                    border: hover[index] ? "1px solid red" : "",
                    boxShadow: hover[index]
                      ? "8px 8px 40px rgba(0, 0, 0, 0.1)"
                      : "",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    mouseOver(e, index);
                  }}
                  onMouseLeave={(e) => {
                    mouseOut(e, index);
                  }}
                >
                  <Paper
                    style={{
                      width: "100%",
                      height: 380,
                    }}
                    elevation={0}
                  >
                    <img
                      src={category?.imagePath}
                      alt="product_image"
                      style={classes.project_img}
                    />
                    <Typography textAlign="center" style={classes.project_text}>
                      {category?.categoryDesc}
                    </Typography>
                    {hover[index] ? (
                      <Button
                        variant="text"
                        endIcon={<img src={ArrowLeft} alt="arrow" />}
                        style={classes.button_text}
                      >
                        Explore
                      </Button>
                    ) : null}
                  </Paper>
                </Grid>
              ))}
          </Grid>
        </Container>
      </Grid>
      <EmailSection />
      <FooterSection  />
      <BottomSection />
    </div>
  );
}

export default ProductPage;
