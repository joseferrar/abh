import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar, Badge, IconButton, Stack } from "@mui/material";
import menu_logo from "../../packages/images/menu_icon.png";
import search_icon from "../../packages/images/search_icon.png";
import { MediaContext } from "../../contexts/ThemeContext";
import cart_icon from "../../packages/images/cart_icon.png";
import user_icon from "../../packages/images/user.png";
import close_icon from "../../packages/images/close_icon.png";

function RightDrawer({ close, setClose }) {
  const [state, setState] = React.useState(false);
  const toggleDrawer = () => () => {
    setState(!state);
  };
  const themeMode = React.useContext(MediaContext);
  const list = () => (
    <Box
      sx={{ width: 400 }}
      role="presentation"
      //   onClick={toggleDrawer(false)}
      //   onKeyDown={toggleDrawer(false)}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "right",
          textAlign: "right",
          fontWeight: "normal",
          marginRight: 20,
          cursor: "pointer",
        }}
      >
        <Avatar
          onClick={toggleDrawer(false)}
          alt="Remy Sharp"
          src={close_icon}
          variant="square"
          style={{
            width: "40.09px",
            height: "40.5px",
            display: "flex",
            justifyContent: "right",
          }}
        />
      </div>
      <List style={{ marginLeft: "20px" }}>
        {[
          "BMI Models",
          "Contact Us",
          "Cross Reference",
          "Custom Portfolio",
          "Literature",
          "Products",
          "Order Entry",
          "Our Team",
          "Where to Buy",
        ].map((text, index) => (
          <div className="sideBar" key={index}>
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemText
                  primary={text}
                  style={{
                    color: "#323B44",
                    fontWeight: 400,
                    fontSize: "18px",
                    textTransform: "capitalize",
                    lineHeight: "22px",
                    fontFamily: "poppins-light",
                  }}
                />
              </ListItemButton>
            </ListItem>
          </div>
        ))}
      </List>
      <Divider />
      <List style={{ marginLeft: "20px" }}>
        {["Logos", "ABH Swag"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  console.log(themeMode);
  return (
    <div>
      <React.Fragment>
        <Stack spacing={3} marginTop={2} direction="row">
          <div style={{ cursor: "pointer" }} onClick={() => setClose(!close)}>
            <Avatar
              alt="Remy Sharp"
              src={close ? close_icon : search_icon}
              variant="square"
              style={{ width: "24px", height: "24px", marginLeft: "20px" }}
            />
          </div>

          <Badge badgeContent={3} color="error">
            <Avatar
              alt="Remy Sharp"
              src={cart_icon}
              variant="square"
              style={{ width: "24px", height: "24px", marginLeft: "20px" }}
            />
          </Badge>

          <div style={{ cursor: "pointer" }}>
            <Avatar
              alt="Remy Sharp"
              src={user_icon}
              variant="square"
              style={{ width: "24px", height: "24px", marginLeft: "20px" }}
            />
          </div>

          <div onClick={toggleDrawer(true)} style={{ cursor: "pointer" }}>
            <Avatar
              alt="Remy Sharp"
              src={menu_logo}
              variant="square"
              style={{
                width: "20.09px",
                height: "19.5px",
                marginTop: "6px",
                marginLeft: "14px",
              }}
            />
          </div>
        </Stack>
        {/* <Button onClick={toggleDrawer(true)}>{"Drewer"}</Button> */}
        <Drawer anchor={"right"} open={state} onClose={toggleDrawer(false)}>
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
}

export default RightDrawer;
