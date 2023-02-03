import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ArrowLeft from "../../packages/images/ArrowLeft.png";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

//create our styles
const classes = {
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

function ProductCard({ data, index, subCategory }) {
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

  console.log(subCategory)
  return (
    <>
      <Grid
        item
        xs={12}
        md={6}
        lg={4}
        xl={3}
        sm={12}
        key={index}
        onClick={() =>
          navigate(`/product/${data?.productCode}`, {
            state: { data },
          })
        }
        style={{
          border: hover[index] ? "1px solid red" : "",
          boxShadow: hover[index] ? "8px 8px 40px rgba(0, 0, 0, 0.1)" : "",
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
            src={"https://abh.colanonline.net/Images/NoImage.png"}
            alt="product_image"
            style={classes.project_img}
          />
          <Typography textAlign="center" style={classes.project_text}>
            {data?.productDesc}
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
    </>
  );
}

export default ProductCard;
