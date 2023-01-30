import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, Divider, Typography, Grid, Paper } from "@mui/material";
import EmailSection from "../components/Sections/EmailSection";
import FooterSection from "../components/Sections/FooterSection";
import BottomSection from "../components/Sections/BottomSection";
import folderIcon from "../packages/images/folder.png";
import folder_open_icon from "../packages/images/folder_open.png";
import { useDispatch, useSelector } from "react-redux";
import { getSubCategoryApi } from "../api/category_api";

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
    width: 80,
    height: 60,
    marginTop: 40,
  },
  project_text: {
    fontFamily: "outfit-regular",
    fontWeight: 700,
    fontSize: 20,
    marginTop: 30,
    textTransform: "uppercase",
    lineHeight: "25.2px",
  },
  project_subtext: {
    fontFamily: "poppins-medium",
    fontWeight: 400,
    fontSize: 15,
    marginTop: 22,
    textAlign: "center",
    lineHeight: "25.2px",
    margin: 30,
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

function CategoryPage(props) {
  const { subCategories } = useSelector((state) => state.category);
  const [hover, setHover] = useState({});
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { category } = location.state;
  console.log(category);

  useEffect(() => {
    dispatch(getSubCategoryApi(category?.categoryCode, navigate));
  }, []);

  console.log(subCategories);
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

  return (
    <div>
      <Container maxWidth="xl">
        <Typography
          variant="h4"
          style={{
            marginTop: 30,
            fontFamily: "montserrat-bold",
            fontSize: 36,
            marginBottom: 20,
          }}
        >
          {category?.categoryDesc}
        </Typography>
        <Divider />
        <Grid container spacing={3}>
          {subCategories &&
            subCategories?.map((subCategory, index) => (
              <Grid
                item
                xs={12}
                md={3}
                sm={4}
                marginTop={3}
                key={index}
                onClick={() =>
                  navigate(`/productDetails`, {
                    state: 'test' ,
                  })
                }
              >
                <Paper
                  style={{
                    width: "100%",
                    height: 380,
                    backgroundColor: "#FBFBFB",
                    boxSizing: "border-box",
                    border: hover[index]
                      ? "1px solid red"
                      : "0.5px solid #DBDBDB",
                    boxShadow: hover[index]
                      ? "8px 8px 40px rgba(0, 0, 0, 0.1)"
                      : "",
                    cursor: "pointer",
                  }}
                  elevation={0}
                  onMouseEnter={(e) => {
                    mouseOver(e, index);
                  }}
                  onMouseLeave={(e) => {
                    mouseOut(e, index);
                  }}
                >
                  <img
                    src={hover[index] ? folder_open_icon : folderIcon}
                    alt="product_image"
                    style={classes.project_img}
                  />
                  <Typography textAlign="center" style={classes.project_text}>
                    {subCategory?.subCategoryName}
                  </Typography>
                  <Typography
                    textAlign="center"
                    style={classes.project_subtext}
                  >
                    A full mortise hinge is a type of hinge where both leafs are
                    installed into a cutout. There is a cutout on the door and a
                    cutout in the frame.
                  </Typography>
                </Paper>
              </Grid>
            ))}
        </Grid>
      </Container>
      <EmailSection />
      <FooterSection />
      <BottomSection />
    </div>
  );
}

export default CategoryPage;
