import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  Container,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import arrowleft from "../packages/images/transLeftArrow.png";
import arrowBlackleft from "../packages/images/blackLeftArrow.png";
import bullet from "../packages/images/bullet.png";
import closeIcon from "../packages/images/close.png";
import degrees from "../packages/images/360-degrees.png";
import arrowBlackRight from "../packages/images/blackRightArrow.png";
import { CreateProdOptSelect, getProductDetailApi } from "../api/product_api";
import { product_options } from "../utils/products_option";
import RadioCard from "../components/Cards/RadioCard";
import { useNavigate, useLocation } from "react-router-dom";
import { Button, ButtonText } from "../components/Button";

function ProductDetails() {
  const location = useLocation()
  const navigate = useNavigate();
  const { categoryCode, productCode } = location.state
  const [idx, setIdx] = useState("description");
  const [optionCode, setOptionCode] = useState();
  const [mandatory, setMandatory] = useState();
  const { productDetails } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const [drawer, setDrawer] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState("true");

  const radioChangeHandler = (e) => {
    setPaymentMethod(e.target.value);
  };

  const optionClick = (event) => {
    setIdx(event);
  };

  const optionCodeClick = (event) => {
    setOptionCode(event);
  };

  const mandatoryClick = (event) => {
    setMandatory(event);
  };
  useEffect(() => {
    dispatch(getProductDetailApi(categoryCode, productCode));
  }, []);

  productDetails?.optionValues
    ?.filter((employee) => {
      return employee?.optionValCode === "US4";
    })
    .map((emp) => {
      console.log(emp);
    });

    // console.log('manddd', mandatory);
  return (
    <div style={{ background: "#F3F3F3", height: "165vh" }}>
      <Grid container spacing={2}>
        <Grid xs={12} sm={4} md={2}>
          <List dense={false}>
            <Paper
              elevation={1}
              style={{ height: "100vh", backgroundColor: "#E9E9E9" }}
            >
              <ListItem
                style={{ backgroundColor: "#323B44", cursor: "pointer" }}
                onClick={() => navigate("/products")}
                secondaryAction={
                  <IconButton edge="end">
                    <img src={arrowBlackleft} alt="img" />
                  </IconButton>
                }
              >
                <ListItemAvatar style={{ marginLeft: 12 }}>
                  <img src={arrowleft} alt="img" />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography
                      style={{
                        color: "#fff",
                        fontFamily: "outfit-regular",
                        fontWeight: 200,
                      }}
                    >
                      Back
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem
                onClick={() => optionClick("description")}
                disablePadding
                style={{
                  backgroundColor: idx === "description" ? "#fff" : "#E9E9E9",
                  padding: 30,
                  marginBottom: 1,
                  borderLeft:
                    idx === "description" ? "20px solid #C42335" : null,
                  cursor: "pointer",
                }}
                divider
              >
                <ListItemText
                  primary={
                    <Typography
                      style={{
                        fontFamily: "outfit-regular",
                        fontSize: 18,
                        textTransform: "uppercase",
                      }}
                      fontWeight={idx === "description" ? 700 : 500}
                    >
                      product description
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem
                onClick={() => {
                  optionClick("options");
                }}
                disablePadding
                style={{
                  backgroundColor: idx === "options" ? "#fff" : "#E9E9E9",
                  padding: 30,
                  marginBottom: 1,
                  borderLeft: idx === "options" ? "20px solid #C42335" : null,
                  cursor: "pointer",
                }}
                divider
              >
                <ListItemText
                  primary={
                    <div>
                      <Typography
                        style={{
                          fontFamily: "outfit-regular",
                          fontSize: 18,
                          textTransform: "uppercase",
                          marginBottom: 12,
                        }}
                        fontWeight={idx === "options" ? 700 : 500}
                      >
                        options
                      </Typography>
                      {idx === "options" && (
                        <div>
                          {productDetails &&
                            productDetails?.optionCategories?.map(
                              (optionCategory, index) =>
                                optionCategory?.isMandatory === false ? (
                                  <div
                                    key={index}
                                    onClick={() => {
                                      optionCodeClick(
                                        optionCategory?.optionCatCode
                                      );
                                      optionClick(
                                        optionCategory?.optionCatName
                                      );
                                      mandatoryClick(
                                        optionCategory?.isMandatory
                                      );
                                    }}
                                  >
                                    <Typography
                                      style={{
                                        fontFamily: "poppins-light",
                                        fontSize: 14,
                                        marginBottom: 12,
                                        marginTop: 12,
                                        cursor: "pointer",
                                      }}
                                      fontWeight={idx === "options" ? 700 : 500}
                                      color={
                                        optionCode ===
                                        optionCategory?.optionCatCode
                                          ? "#C42335"
                                          : "#000"
                                      }
                                    >
                                      {optionCategory?.optionCatName}
                                    </Typography>
                                    <Divider />
                                  </div>
                                ) : null
                            )}
                        </div>
                      )}
                    </div>
                  }
                />
              </ListItem>
              {productDetails?.optionCategories?.map((option, index) => (
                <ListItem
                  onClick={() => {
                    optionCodeClick(option?.optionCatCode);
                    optionClick(option?.optionCatName);
                    mandatoryClick(
                      option?.isMandatory
                    );
                  }}
                  key={index}
                  disablePadding
                  style={{
                    backgroundColor:
                      idx === option.optionCatName ? "#fff" : "#E9E9E9",
                    padding: 30,
                    marginBottom: 1,
                    borderLeft:
                      idx === option.optionCatName
                        ? "20px solid #C42335"
                        : null,
                    cursor: "pointer",
                  }}
                  divider
                >
                  <ListItemText
                    primary={
                      <Typography
                        style={{
                          fontFamily: "outfit-regular",
                          fontSize: 18,
                          textTransform: "uppercase",
                        }}
                        fontWeight={idx === option.optionCatName ? 700 : 500}
                      >
                        {option?.optionCatName}
                      </Typography>
                    }
                  />
                </ListItem>
              ))}
            </Paper>
          </List>
        </Grid>

        {/* proudct image content */}
        <Grid xs={12} sm={4} md={7.5} marginLeft={2} marginTop={6}>
          <Paper elevation={0} style={{ paddingBottom: 20 }}>
            <Grid container spacing={2} p={2}>
              <Grid item xs={6} sm={4} md={4}>
                <Typography
                  variant="subtitle1"
                  style={{
                    fontFamily: "outfit-regular",
                    fontWeight: 600,
                    fontSize: 18,
                    lineHeight: "30px",

                    marginLeft: 14,
                  }}
                >
                  {productDetails?.productMaster?.productDesc}
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              spacing={2}
              p={6}
              marginLeft="auto"
              marginRight="auto"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              {productDetails?.productMaster?.imagePath?.map(
                (product_image, i) =>
                  i < 3 && (
                    <Grid item xs={6} sm={4} md={4} key={i}>
                      <img
                        src={product_image}
                        alt="img"
                        width={220}
                        height={280}
                      />
                    </Grid>
                  )
              )}
            </Grid>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                variant="subtitle1"
                style={{
                  fontFamily: "poppins-medium",
                  fontSize: 16,
                  textTransform: "uppercase",
                  marginRight: 6,
                }}
              >
                View
              </Typography>
              <img src={degrees} alt="img" />
            </div>
          </Paper>
          <Paper
            elevation={0}
            style={{ width: "100%", backgroundColor: "#E9E9E9", marginTop: 16 }}
          >
            <IconButton
              style={{
                float: "right",
                marginRight: 12,
                marginTop: 8,
                marginBottom: -22,
              }}
            >
              <img src={closeIcon} alt="Closeimg" />
            </IconButton>
            <Grid container spacing={0} p={3}>
              {idx !== "description" &&
                productDetails?.optionValues?.map(
                  (optionValue, index) =>
                    optionCode === optionValue?.optionCatCode && (
                      <Grid xs={12} sm={4} md={3} key={index}>
                        <RadioCard
                          img={optionValue?.multiImagePath[0]}
                          title={optionValue?.optionValName}
                          price={optionValue?.price}
                          value={optionValue?.isSelected}
                          onChange={radioChangeHandler}
                          onClick={async () => {
                            const create_sum_option = {
                              customercode: 0,
                              visitorCode: 0,
                              prodCode: "6000",
                              optionCatCode: optionValue?.optionCatCode,
                              optionValCode: optionValue?.optionValCode,
                              price: optionValue?.price,
                              isMandatory: mandatory,
                            
                            };
                            await dispatch(
                              CreateProdOptSelect(create_sum_option)
                            );
                           await dispatch(getProductDetailApi(categoryCode, productCode));
                          }}
                        />
                      </Grid>
                    )
                )}

              {idx === "description" &&
                productDetails?.prodSpec?.map((product, i) => (
                  <Grid xs={12} sm={4} md={6} key={i}>
                    <List>
                      <ListItem>
                        <img src={bullet} alt="bullet" />

                        <ListItemText
                          primary={
                            <Typography
                              variant="subtitle1"
                              style={{
                                fontSize: 16,
                                fontFamily: "poppins-medium",
                                fontWeight: 400,
                                marginLeft: 6,
                              }}
                            >
                              {product?.prodSpec}
                            </Typography>
                          }
                        />
                      </ListItem>
                    </List>
                  </Grid>
                ))}
            </Grid>
          </Paper>
        </Grid>

        {/* summary page */}
        <Grid xs={12} sm={5} md={2.2} marginLeft={"auto"}>
          <List dense={false}>
            <Paper
              elevation={1}
              style={{ height: "100vh", backgroundColor: "#fff" }}
            >
              <ListItem
                style={{ backgroundColor: "#fff" }}
                secondaryAction={
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => setDrawer(false)}
                  >
                    <img src={arrowBlackRight} alt="img" />
                  </IconButton>
                }
              >
                <ListItemText
                  primary={
                    <Typography
                      variant="subtitle1"
                      style={{
                        fontSize: 20,
                        color: "#000",
                        fontFamily: "outfit-regular",
                        fontWeight: 500,
                        textTransform: "uppercase",
                      }}
                    >
                      summary
                    </Typography>
                  }
                />
              </ListItem>
              <Divider />

              {productDetails?.summaryDetails?.selectedOptDetrail?.map(
                (summary, i) => (
                  <ListItem
                    key={i}
                    secondaryAction={
                      <Typography
                        variant="subtitle1"
                        style={{
                          fontSize: 15,
                          color: "#000",
                          fontFamily: "outfit-regular",
                          fontWeight: 700,
                        }}
                      >
                        {`$${summary?.price}`}
                      </Typography>
                    }
                  >
                    <ListItemText
                      primary={
                        <Typography
                          variant="subtitle1"
                          style={{
                            fontSize: 16,
                            color: "#000",
                            fontFamily: "outfit-regular",
                            fontWeight: 700,
                          }}
                        >
                          {summary?.optionCatName}
                        </Typography>
                      }
                      secondary={
                        <Typography
                          variant="subtitle1"
                          style={{
                            fontSize: 14,
                            color: "#000",
                            fontFamily: "poppins-light",
                            fontWeight: 700,
                          }}
                        >
                          {summary?.optionValName}
                        </Typography>
                      }
                    />
                  </ListItem>
                )
              )}

              <Divider />
              <ListItem
                divider
                secondaryAction={
                  <Typography
                    variant="subtitle1"
                    style={{
                      fontSize: 18,
                      color: "#000",
                      fontFamily: "outfit-regular",
                      fontWeight: 700,
                    }}
                  >
                    {`$${productDetails?.summaryDetails?.grandTotal}`}
                  </Typography>
                }
              >
                <ListItemText
                  primary={
                    <Typography
                      variant="subtitle1"
                      style={{
                        fontSize: 18,
                        color: "#000",
                        fontFamily: "outfit-regular",
                        fontWeight: 500,
                      }}
                    >
                      Grand Total
                    </Typography>
                  }
                />
              </ListItem>
              <Button
                style={{ width: "90%", borderRadius: 30, margin: 12 }}
                onClick={() => navigate("/cart")}
              >
                <ButtonText>GO TO CART</ButtonText>
              </Button>
            </Paper>
          </List>
        </Grid>
      </Grid>
    </div>
  );
}

export default ProductDetails;
