import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import logo from "../../packages/images/logo.png";
import menu_logo from "../../packages/images/menu.svg";
import { Avatar, Container } from "@mui/material";
import MenuButton from "../Menus/MenuButton";
import RightDrawer from "../Drawers/RightDrawer";
import { NavLink } from "../Links/NavLink";
import SearchInput from "../Inputs/SearchInput";

const drawerWidth = 240;

function Header(props) {
  const location = useLocation();
  const navigate = useNavigate();
  const [close, setClose] = useState(false);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Avatar
        alt="Remy Sharp"
        src={logo}
        variant="square"
        style={{
          width: "140px",
          height: "46.67px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      />

      <List>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary={"HOME"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary={"LITERATURE"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary={"OUR TEAM"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary={"WHERE TO BUY"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary={"CONTACT US"} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav" color="inherit" style={{ height: "80px" }}>
        <Container maxWidth="xl">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <Avatar
                alt="Remy Sharp"
                src={menu_logo}
                variant="square"
                style={{ width: "25.09px", height: "17.5px" }}
              />
            </IconButton>

            <Avatar
              alt="Remy Sharp"
              src={logo}
              variant="square"
              style={{ width: "140px", height: "46.67px", top: "5px" }}
            />
            <Box
              sx={{
                display: { xs: "none", sm: "flex" },
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "12px",
              }}
            >
              {close === false && (
                <>
                  <NavLink
                    onClick={() => navigate("/")}
                    style={{
                      color: location.pathname === "/" ? "#c42335" : null,
                      marginLeft: 24,
                    }}
                  >
                    HOME
                  </NavLink>
                  <MenuButton />
                  <NavLink style={{ marginLeft: 24 }}>LITERATURE</NavLink>
                  <NavLink style={{ marginLeft: 24 }}>OUR TEAM</NavLink>
                  <NavLink style={{ marginLeft: 24 }}>WHERE TO BUY</NavLink>
                  <NavLink style={{ marginLeft: 24 }}>CONTACT US</NavLink>
                </>
              )}
            </Box>
            {close === true && <SearchInput />}

            {/* <IconButton onClick={handleDrawerToggle}> */}
            {/* <Avatar
                alt="Remy Sharp"
                src={menu_logo}
                variant="square"
                style={{ width: "25.09px", height: "17.5px" }}
              /> */}
            <RightDrawer close={close} setClose={setClose} />
            {/* </IconButton> */}
          </Toolbar>
        </Container>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 5 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

Header.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Header;
