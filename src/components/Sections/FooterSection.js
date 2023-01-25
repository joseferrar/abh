import React, { useEffect } from "react";
import {
  Avatar,
  Container,
  Divider,
  Grid,
  Typography,
  Stack,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import logo from "../../packages/images/logo.png";
import facebook from "../../packages/images/facebook.png";
import linkdin from "../../packages/images/linkdin.png";
import youtube from "../../packages/images/youtube.png";
import twitter from "../../packages/images/twitter.png";
import instagram from "../../packages/images/instagram.png";
import { NavLink } from "../Links/NavLink";
import { getCategoryApi } from "../../api/category_api";

function FooterSection() {
  const { categories } = useSelector((state) => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategoryApi());
  }, []);

  const classes = {
    navlink: {
      fontSize: 16,
      display: "block",
      lineHeight: 2,
      fontFamily: "poppins-light",
      fontWeight: 600,
    },
    paragraph: {
      fontFamily: "poppins-light",
      fontWeight: 600,
      fontSize: 14,
      lineHeight: "30px",
      marginTop: 20,
    },
    address: {
      fontFamily: "poppins-medium",
      fontWeight: 600,
      width: 280,
      fontSize: 16,
      lineHeight: "30px",
      marginTop: 20,
    },
    email: {
      fontFamily: "poppins-medium",
      fontWeight: 600,
      width: 130,
      fontSize: 14,
      lineHeight: "30px",
      marginTop: 20,
    },
    footer_title: {
      fontFamily: "outfit-regular",
      fontWeight: 600,
      fontSize: 22,
      lineHeight: "30px",
      textTransform: "capitalize",
      marginLeft: 5,
      marginBottom: 20,
      width: "302px",
    },
    divider: {
      display: "flex",
      justifyContent: "center",
      alignItems: "end",
      color: "gray",
    },
  };
  return (
    <Container maxWidth="xl">
      <Grid container spacing={3} marginBottom={5} marginTop={4}>
        <Grid item xs={12} md={4} sm={5} marginTop={3}>
          <Avatar
            alt="Remy Sharp"
            src={logo}
            variant="square"
            style={{ width: "120px", height: "40px", top: "5px" }}
          />
          <Typography variant="subtitle1" style={classes.paragraph}>
            Architectural Builders Hardware Mfg. Inc. (ABH) is a high quality
            manufacturer of Overhead Holders & Stops, Hospital Latches,
            Electromagnetic Holders, Pivots, Strikes and Rescue Stops, Aluminum
            Hinges, Stainless Steel Hinges, Coordinators, Flush Bolts, Power
            Wire Transfers, and Roller Latches.
          </Typography>
          <Typography variant="subtitle1" style={classes.address}>
            Architectural Builders 1222 Ardmore Avenue, Itasca, Illinois 60143
            630-875-9900
          </Typography>

          <Grid container>
            <Typography
              variant="subtitle1"
              style={{
                fontFamily: "poppins-medium",
                fontWeight: 600,
                width: 130,
                fontSize: 14,
                lineHeight: "30px",
                marginTop: 20,
              }}
            >
              cs@abhmfg.com
            </Typography>
            <Typography style={classes.divider}>|</Typography>
            <Typography
              variant="subtitle1"
              style={{
                fontFamily: "poppins-medium",
                fontWeight: 600,
                width: 165,
                fontSize: 14,
                lineHeight: "30px",
                marginTop: 20,
                marginLeft: 12,
              }}
            >
              quotes@abhmfg.com
            </Typography>
            <Typography style={classes.divider}>|</Typography>
            <Typography
              variant="subtitle1"
              style={{
                fontFamily: "poppins-medium",
                fontWeight: 600,
                width: 140,
                fontSize: 14,
                lineHeight: "30px",
                marginTop: 20,
                marginLeft: 12,
              }}
            >
              info@abhmfg.com
            </Typography>
          </Grid>

          {/* social media */}
          <Grid container marginTop={2}>
            <Typography
              variant="subtitle1"
              style={{
                fontFamily: "outfit-regular",
                fontWeight: 500,
                fontSize: 22,
                lineHeight: "30px",
                marginTop: 20,
                textTransform: "capitalize",
              }}
            >
              Follow Us:
            </Typography>
            <Stack
              direction="row"
              spacing={2}
              display="flex"
              alignItems="center"
              justifyContent="center"
              marginTop={2}
              marginLeft={2}
            >
              <Avatar alt="Remy Sharp" src={facebook} />
              <Avatar alt="Remy Sharp" src={linkdin} />
              <Avatar alt="Remy Sharp" src={youtube} />
              <Avatar alt="Remy Sharp" src={twitter} />
              <Avatar alt="Remy Sharp" src={instagram} />
            </Stack>
          </Grid>
        </Grid>
        <Grid item xs={12} md={2} sm={5} marginTop={3}>
          <Typography variant="subtitle1" style={classes.footer_title}>
            ABHMFG.COM
          </Typography>
          <NavLink style={classes.navlink}>Home</NavLink>
          <NavLink style={classes.navlink}>ABH Factory Tour</NavLink>
          <NavLink style={classes.navlink}>BIM Models</NavLink>
          <NavLink style={classes.navlink}>Literature</NavLink>
          <NavLink style={classes.navlink}>Quick Ship Programs</NavLink>
          <NavLink style={classes.navlink}>Anti-Microbial</NavLink>
          <NavLink style={classes.navlink}>Videos</NavLink>
        </Grid>

        <Grid item xs={12} md={4} sm={5} marginTop={3}>
          <Typography variant="subtitle1" style={classes.footer_title}>
            PRODUCTS
          </Typography>
          {categories && categories.map((category, index) => (
            <NavLink key={index} style={classes.navlink}>
              {category?.categoryDesc}
            </NavLink>
          ))}
        </Grid>
        <Grid item xs={12} md={2} sm={5} marginTop={3}>
          <Typography variant="subtitle1" style={classes.footer_title}>
            CONTACT, SALES & SUPPORT
          </Typography>

          <NavLink style={classes.navlink}>Contact Us</NavLink>
          <NavLink style={classes.navlink}>Returns</NavLink>
          <NavLink style={classes.navlink}>Track Your Shipment</NavLink>
          <NavLink style={classes.navlink}>Warranty</NavLink>
          <NavLink style={classes.navlink}>Recently Viewed Products</NavLink>
          <NavLink style={classes.navlink}>Sitemap</NavLink>
        </Grid>
      </Grid>
    </Container>
  );
}

export default FooterSection;
