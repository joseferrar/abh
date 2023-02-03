import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { List, ListItem, ListItemText, Typography } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import MenuIcon from "@mui/icons-material/Menu";
import { getSubCategoryApi } from "../../api/category_api";

const classes = {
  headingStyles: {
    color: "#FFFFFF",
    fontFamily: "Outfit,sans-serif",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "20px",
    lineHeight: "30px",
    textTransform: "uppercase",
    letterSpacing: "0.02em",
    padding: "41px 110px 41px 16px ",
  },
  leftIconStyles: {
    position: "absolute",
    right: "0px",
    transform: "translateY(-50%)",
    top: "50%",
    width: "21px",
    height: "25px",
    background: " white",
    cursor: "pointer",
  },
  productListSideMain: {
    // width: "100%",
    marginRight: "35px",
  },
  productListHeading: {
    width: "376px",
    marginLeft: "47px",
    height: "142px",
    backgroundColor: "#323b44",
    position: "relative",
  },
  productListContainer: {
    marginLeft: "47px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "5px",
    width: "376px",
    height: "calc(100% - 142px)",
  },
  productList: {
    listStyle: "none",
    padding: "16px",
    margin: "0px",
  },
  productListItem: {
    marginBottom: "16px",
    padding: "28px 20px",
    background: "#f3f3f3",
    fontFamily: "Outfit",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "18px",
    lineHeight: "24px",
    cursor: "pointer",
    "&:last-child": { marginBottom: "0px" },
  },
  a: {
    textDecoration: "none",
  },
  active: {
    backgroundColor: "#323b44",
    color: "#ffffff",
  },
  listItemText: {
    fontFamily: "outfit-regular",
    fontWeight: 500,
    fontSize: 20,
    lineHeight: "24px",
  },
};

function ProductListNav(props) {
  const dispatch = useDispatch();
  const { category, optionClick, idx } = props;
  const { subCategories } = useSelector((state) => state.category);
  const [active, setActive] = useState(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    dispatch(getSubCategoryApi(category?.categoryCode));
  }, []);
  const handleClick = (id) => {
    setActive(id);
  };

  const handleLeftArrow = () => {
    setToggle(!toggle);
  };

  console.log(category);
  return (
    <>
      {!toggle ? (
        <div style={classes.productListSideMain}>
          <div style={classes.productListHeading}>
            <ChevronLeftIcon
              sx={classes.leftIconStyles}
              onClick={handleLeftArrow}
            />
            <Typography sx={classes.headingStyles}>
              {category?.categoryDesc}
            </Typography>
          </div>
          <div style={classes.productListContainer}>
            <List dense sx={classes.productList}>
              {subCategories.map((subCategory) => (
                <ListItem
                  key={subCategory.id}
                  sx={[
                    classes.productListItem,
                    idx === subCategory.subCategoryCode ? classes.active : "",
                  ]}
                  onClick={() => optionClick(subCategory.subCategoryCode)}
                >
                  <a style={classes.a}>
                    <ListItemText
                      primaryTypographyProps={classes.listItemText}
                      primary={subCategory?.subCategoryName}
                    />
                  </a>
                </ListItem>
              ))}
            </List>
          </div>
        </div>
      ) : (
        <MenuIcon
          onClick={handleLeftArrow}
          sx={{ marginLeft: "22px", marginTop: "10px", cursor: "pointer" }}
        />
      )}
    </>
  );
}

export default ProductListNav;
