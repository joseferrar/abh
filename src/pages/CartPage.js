import {
  Container,
  Grid,
  Input,
  Paper,
  Stack,
  Button,
  ButtonGroup,
  Typography,
  Box,
} from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import a110 from "../packages/images/a110.png";
import note from "../packages/images/note.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DraftsIcon from "@mui/icons-material/Drafts";
import editIcon from "../packages/images/editIcon.png";
import "../App.css";

function OrderPage() {
  const { count, isLogin } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  //create our styles
  console.log("counter", isLogin);

  const classes = {
    heading: {
      fontFamily: "montserrat-bold",
      fontSize: "36px",
      color: "#323B44",
      marginTop: 20,
    },
    section: {
      padding: 20,
      color: "#000",
    },
  };

  return (
    <Container maxWidth="xl">
      <Grid container marginTop>
        <Typography variant="h3" style={classes.heading}>
          My Cart
        </Typography>
        <Button
          variant="contained"
          disableElevation={true}
          style={{
            borderRadius: "20px",
            backgroundColor: "#323B44",
            height: 40,
            marginLeft: "auto",
          }}
        >
          Edit Product Selection
        </Button>
      </Grid>

      <Divider style={{ marginTop: 16 }} />
      <Grid container spacing={2} marginTop={2}>
        <Grid item xs={12} sm={4} md={7}>
          <Paper style={classes.section} elevation={0}>
            <Grid container>
              <Grid item xs={12} sm={4}>
                {/* <Typography>1.</Typography> */}
                <img src={a110} alt="a110" />
              </Grid>
              <Grid item xs={12} sm={4} md={7}>
                <Typography
                  variant="subtitle2"
                  style={{
                    color: "#000",
                    textAlign: "left",
                    width: "100%",
                    fontFamily: "outfit-regular",
                    fontWeight: 600,
                    fontSize: 20,
                  }}
                >
                  A110HD / A110LL Aluminum Continuous Gear Hinges Full Mortise
                </Typography>
                <Typography
                  variant="subtitle2"
                  mt={2}
                  style={{
                    textAlign: "left",
                    width: "100%",
                    fontFamily: "poppins-light",
                    color: "#323B44",
                    fontWeight: 600,
                  }}
                >
                  Standard / Heavy Duty and Lead Lined
                </Typography>

                <Button
                  variant="text"
                  style={{
                    fontFamily: "montserrat-bold",
                    color: "#323B44",
                    fontWeight: "bold",
                    textTransform: "capitalize",
                  }}
                  startIcon={<img src={note} alt="note" />}
                >
                  Add Notes
                </Button>

                <Grid container spacing={1}>
                  <Grid item xs={12} sm={4} md={8}>
                    <div class="input-container">
                      <input
                        class="input-field"
                        type="text"
                        placeholder="Type Here..."
                        name="usrnm"
                      />
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={4} md={2}>
                    <ButtonGroup
                      aria-label="outlined primary button group"
                      color="error"
                    >
                      <Typography
                        variant="subtitle1"
                        style={{
                          fontFamily: "montserrat-bold",
                          color: "#323B44",
                          fontWeight: "bold",
                          textTransform: "capitalize",
                          marginRight: "12px",
                          marginTop: "6px",
                        }}
                      >
                        Quantity:
                      </Typography>
                      <Button variant="contained">+</Button>
                      <Button style={{ color: "#000" }} disabled={true}>
                        1
                      </Button>
                      <Button variant="contained">-</Button>
                    </ButtonGroup>
                  </Grid>
                </Grid>
                {/* buttons 2 */}
                <Grid container spacing={2} marginTop={0.5}>
                  <Grid item xs={12} sm={4} md={7}>
                    <Button
                      variant="contained"
                      disableElevation
                      startIcon={
                        <img
                          src={editIcon}
                          alt="icon"
                          style={{ marginLeft: 12 }}
                        />
                      }
                      style={{
                        borderRadius: "20px",
                        backgroundColor: "#323B44",
                        height: 40,
                      }}
                    >
                      Edit Product Selection
                    </Button>
                  </Grid>
                  <Grid item xs={12} sm={4} md={3}>
                    <Button
                      variant="outlined"
                      style={{
                        borderRadius: "20px",
                        color: "#000",
                        borderColor: "gray",
                        textTransform: "capitalize",
                        fontFamily: "poppins-medium",
                        width: 100,
                        fontWeight: 500,
                        height: 40,
                      }}
                    >
                      Delete
                    </Button>
                  </Grid>
                  <Grid item xs={12} sm={4} md={2}>
                    <Button
                      variant="outlined"
                      style={{
                        borderRadius: "20px",
                        color: "#000",
                        borderColor: "gray",
                        textTransform: "capitalize",
                        fontFamily: "poppins-medium",
                        width: 100,
                        fontWeight: 500,
                        height: 40,
                      }}
                    >
                      Save
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4} md={5}>
          {/* <button onClick={() => dispatch(login())}>Increment</button> */}
          <Paper style={classes.section} elevation={0}>
            <ul style={{ display: "flex", listStyle: "none" }}>
              <li>
                <Typography
                  variant="subtitle1"
                  style={{
                    fontFamily: "outfit-regular",
                    color: "#323B44",
                    fontWeight: 300,
                    textTransform: "capitalize",
                    marginRight: "12px",
                    marginTop: "6px",
                    fontSize: 20,
                  }}
                >
                  Selection Total
                </Typography>
              </li>
              <Typography
                variant="subtitle1"
                style={{
                  fontFamily: "poppins-medium",
                  fontWeight: 400,
                  color: "#323B44",
                  textTransform: "capitalize",
                  marginLeft: "45px",
                  marginTop: "6px",
                  fontSize: 20,
                }}
              >
                $2,280.00
              </Typography>
            </ul>
            <ul style={{ display: "flex", listStyle: "none" }}>
              <li>
                <Typography
                  variant="subtitle1"
                  style={{
                    fontFamily: "outfit-regular",
                    color: "#323B44",
                    fontWeight: 300,
                    textTransform: "capitalize",
                    marginRight: "12px",
                    marginTop: "6px",
                    fontSize: 20,
                  }}
                >
                  Selection Total
                </Typography>
              </li>
              <Typography
                variant="subtitle1"
                style={{
                  fontFamily: "poppins-medium",
                  fontWeight: 400,
                  color: "#323B44",
                  textTransform: "capitalize",
                  marginLeft: "45px",
                  marginTop: "6px",
                  fontSize: 20,
                }}
              >
                $2,280.00
              </Typography>
            </ul>
            <ul style={{ display: "flex", listStyle: "none" }}>
              <li>
                <Typography
                  variant="subtitle1"
                  style={{
                    fontFamily: "outfit-regular",
                    color: "#323B44",
                    fontWeight: 300,
                    textTransform: "capitalize",
                    marginRight: "12px",
                    marginTop: "6px",
                    fontSize: 20,
                  }}
                >
                  Selection Total
                </Typography>
              </li>
              <Typography
                variant="subtitle1"
                style={{
                  fontFamily: "poppins-medium",
                  fontWeight: 400,
                  color: "#323B44",
                  textTransform: "capitalize",
                  marginLeft: "45px",
                  marginTop: "6px",
                  fontSize: 20,
                }}
              >
                $2,280.00
              </Typography>
            </ul>
            <Divider style={{ width: "250px", marginLeft: 40 }} />
            <ul style={{ display: "flex", listStyle: "none" }}>
              <li>
                <Typography
                  variant="subtitle1"
                  style={{
                    fontFamily: "outfit-regular",
                    color: "#323B44",
                    fontWeight: 600,
                    textTransform: "capitalize",
                    marginRight: "12px",
                    marginTop: "6px",
                    fontSize: 20,
                  }}
                >
                  Sub Total
                </Typography>
              </li>
              <Typography
                variant="subtitle1"
                style={{
                  fontFamily: "outfit-regular",
                  fontWeight: 600,
                  color: "#323B44",
                  textTransform: "capitalize",
                  marginLeft: "100px",
                  marginTop: "6px",
                  fontSize: 20,
                }}
              >
                $2,280.00
              </Typography>
            </ul>
          </Paper>
        </Grid>
      </Grid>

      {/* responsive error */}
      <Grid container>
        <Grid item xs={12} sm={4} md={6}>
          <Paper style={classes.section} elevation={0}>
            <Grid container>
              <Grid item xs={12} sm={4} md={10}>
                <Box
                  style={{
                    backgroundColor: "rgb(0 0 0 / 10%)",
                    padding: 5,
                    width: "680px",
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    style={{ fontWeight: "bold", marginLeft: "12px" }}
                  >
                    Selection
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={12} sm={4} md={6}>
                <ul
                  style={{
                    display: "flex",
                    listStyle: "none",
                    marginLeft: -20,
                  }}
                >
                  <li>
                    <Typography
                      variant="subtitle1"
                      style={{
                        fontFamily: "gilroy",
                        color: "#323B44",
                        fontWeight: 700,
                        textTransform: "capitalize",
                        marginRight: "12px",
                        marginTop: "6px",
                      }}
                    >
                      Finishes
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      variant="subtitle2"
                      style={{
                        color: "#323B44",
                        width: "400px",
                        textTransform: "capitalize",
                        marginRight: "12px",
                        marginTop: "10px",
                        marginLeft: 20,
                      }}
                    >
                      US3 - 605\632 Bright Bross
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      variant="subtitle1"
                      style={{
                        fontFamily: "outfit-regular",
                        fontWeight: 600,
                        color: "#323B44",
                        textTransform: "capitalize",
                        marginTop: "10px",
                      }}
                    >
                      $2,280.00
                    </Typography>
                  </li>
                </ul>

                <ul
                  style={{
                    display: "flex",
                    listStyle: "none",
                    marginLeft: -20,
                  }}
                >
                  <li>
                    <Typography
                      variant="subtitle1"
                      style={{
                        fontFamily: "gilroy",
                        color: "#323B44",
                        fontWeight: 700,
                        textTransform: "capitalize",
                        marginRight: "12px",
                        marginTop: "6px",
                        width: "100px",
                      }}
                    >
                      Back Set -
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      variant="subtitle2"
                      style={{
                        color: "#323B44",
                        width: "200px",
                        textTransform: "capitalize",
                        marginRight: "12px",
                        marginTop: "10px",
                      }}
                    >
                      2-3/4* Back set
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      variant="subtitle1"
                      style={{
                        fontFamily: "outfit-regular",
                        fontWeight: 600,
                        color: "#323B44",
                        textTransform: "capitalize",
                        marginTop: "6px",
                        marginLeft: 180,
                      }}
                    >
                      $300.00
                    </Typography>
                  </li>
                </ul>

                <ul
                  style={{
                    display: "flex",
                    listStyle: "none",
                    marginLeft: -20,
                  }}
                >
                  <li>
                    <Typography
                      variant="subtitle1"
                      style={{
                        fontFamily: "gilroy",
                        color: "#323B44",
                        fontWeight: 700,
                        textTransform: "capitalize",
                        marginRight: "12px",
                        marginTop: "6px",
                        width: "100px",
                      }}
                    >
                      Strike -
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      variant="subtitle2"
                      style={{
                        color: "#323B44",
                        width: "200px",
                        textTransform: "capitalize",
                        marginRight: "12px",
                        marginTop: "10px",
                      }}
                    >
                      D-Strike
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      variant="subtitle1"
                      style={{
                        fontFamily: "outfit-regular",
                        fontWeight: 600,
                        color: "#323B44",
                        textTransform: "capitalize",

                        marginLeft: 180,
                      }}
                    >
                      $30.00
                    </Typography>
                  </li>
                </ul>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid>
          <Divider />
        </Grid>
        <Grid item xs={12} sm={4} md={5} marginTop={2.5}>
          <Grid item xs={12} sm={4} md={12}>
            <Box
              style={{
                backgroundColor: "rgb(0 0 0 / 10%)",
                padding: 5,
                width: "680px",
              }}
            >
              <Typography
                variant="subtitle1"
                style={{ fontWeight: "bold", marginLeft: "12px" }}
              >
                Options
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={4} md={6}>
            <ul
              style={{
                display: "flex",
                listStyle: "none",
                marginLeft: -20,
              }}
            >
              <li>
                <Typography
                  variant="subtitle1"
                  style={{
                    fontFamily: "gilroy",
                    color: "#323B44",
                    fontWeight: 700,
                    textTransform: "capitalize",
                    marginRight: "12px",
                    marginTop: "6px",
                  }}
                >
                  Engraving-
                </Typography>
              </li>
              <li>
                <Typography
                  variant="subtitle2"
                  style={{
                    color: "#323B44",
                    width: "400px",
                    textTransform: "capitalize",
                    marginRight: "12px",
                    marginTop: "10px",
                    marginLeft: 20,
                  }}
                >
                  P1 - Engraved Handles - Push Up/Down
                </Typography>
              </li>
              <li>
                <Typography
                  variant="subtitle1"
                  style={{
                    fontFamily: "outfit-regular",
                    fontWeight: 600,
                    color: "#323B44",
                    textTransform: "capitalize",
                    marginTop: "10px",
                  }}
                >
                  $2,100.00
                </Typography>
              </li>
            </ul>

            <ul
              style={{
                display: "flex",
                listStyle: "none",
                marginLeft: -20,
              }}
            >
              <li>
                <Typography
                  variant="subtitle1"
                  style={{
                    fontFamily: "gilroy",
                    color: "#323B44",
                    fontWeight: 700,
                    textTransform: "capitalize",
                    marginRight: "12px",
                    marginTop: "6px",
                    width: "100px",
                  }}
                >
                  Thickness -
                </Typography>
              </li>
              <li>
                <Typography
                  variant="subtitle2"
                  style={{
                    color: "#323B44",
                    width: "200px",
                    textTransform: "capitalize",
                    marginRight: "12px",
                    marginTop: "10px",
                  }}
                >
                  2-3/4* Back set
                </Typography>
              </li>
              <li>
                <Typography
                  variant="subtitle1"
                  style={{
                    fontFamily: "outfit-regular",
                    fontWeight: 600,
                    color: "#323B44",
                    textTransform: "capitalize",
                    marginTop: "6px",
                    marginLeft: 200,
                  }}
                >
                  $3,100.00
                </Typography>
              </li>
            </ul>

            <ul
              style={{
                display: "flex",
                listStyle: "none",
                marginLeft: -20,
              }}
            >
              <li>
                <Typography
                  variant="subtitle1"
                  style={{
                    fontFamily: "gilroy",
                    color: "#323B44",
                    fontWeight: 700,
                    textTransform: "capitalize",
                    marginRight: "12px",
                    marginTop: "6px",
                    width: "150px",
                  }}
                >
                  Security Fastner -
                </Typography>
              </li>
              <li>
                <Typography
                  variant="subtitle2"
                  style={{
                    color: "#323B44",
                    width: "200px",
                    textTransform: "capitalize",
                    marginRight: "12px",
                    marginTop: "10px",
                  }}
                >
                  SEC-Security Fastners
                </Typography>
              </li>
              <li>
                <Typography
                  variant="subtitle1"
                  style={{
                    fontFamily: "outfit-regular",
                    fontWeight: 600,
                    color: "#323B44",
                    textTransform: "capitalize",
                    marginLeft: 150,
                  }}
                >
                  $400.00
                </Typography>
              </li>
            </ul>

            <ul
              style={{
                display: "flex",
                listStyle: "none",
                marginLeft: -20,
              }}
            >
              <li>
                <Typography
                  variant="subtitle1"
                  style={{
                    fontFamily: "gilroy",
                    color: "#323B44",
                    fontWeight: 700,
                    textTransform: "capitalize",
                    marginRight: "12px",
                    marginTop: "6px",
                    width: "250px",
                  }}
                >
                  AM-Anti-Microbial Coating -
                </Typography>
              </li>
              <li>
                <Typography
                  variant="subtitle2"
                  style={{
                    color: "#323B44",
                    width: "200px",
                    textTransform: "capitalize",
                    marginRight: "12px",
                    marginTop: "10px",
                  }}
                >
                  AM -Anti-Microbial Coating
                </Typography>
              </li>
              <li>
                <Typography
                  variant="subtitle1"
                  style={{
                    fontFamily: "outfit-regular",
                    fontWeight: 600,
                    color: "#323B44",
                    textTransform: "capitalize",
                    marginLeft: 50,
                  }}
                >
                  $800.00
                </Typography>
              </li>
            </ul>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default OrderPage;
