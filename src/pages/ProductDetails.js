import React, { useState } from "react";
import {
  Container,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import arrowleft from "../packages/images/transLeftArrow.png";
import arrowBlackleft from "../packages/images/blackLeftArrow.png";

function ProductDetails() {
  const [drawer, setDrawer] = useState(true);
  return (
    <div>
      <Grid container spacing={2}>
        <Grid xs={12} sm={4} md={2}>
          <List dense={false}>
            <Paper
              elevation={1}
              style={{ height: "100vh", backgroundColor: "#E9E9E9" }}
            >
              <ListItem
                style={{ backgroundColor: "#323B44" }}
                secondaryAction={
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => setDrawer(false)}
                  >
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
                disablePadding
                style={{
                  backgroundColor: "#E9E9E9",
                  padding: 30,
                  marginBottom: 1,
                  fontWeight: 100,
                  "& hover": {
                    backgroundColor: "blue",
                  },
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
                      fontWeight={400}
                    >
                      finishes
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem
                disablePadding
                style={{
                  backgroundColor: "#E9E9E9",
                  padding: 30,
                  marginBottom: 1,
                  fontWeight: 100,
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
                      fontWeight={400}
                    >
                      back set
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem
                disablePadding
                style={{
                  backgroundColor: "#E9E9E9",
                  padding: 30,
                  marginBottom: 1,
                  fontWeight: 100,
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
                      fontWeight={400}
                    >
                      strike
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem
                disablePadding
                style={{
                  backgroundColor: "#E9E9E9",
                  padding: 30,
                  marginBottom: 1,
                  fontWeight: 100,
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
                      fontWeight={400}
                    >
                      handing
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem
                disablePadding
                style={{
                  backgroundColor: "#E9E9E9",
                  padding: 30,
                  marginBottom: 1,
                  fontWeight: 100,
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
                      fontWeight={400}
                    >
                      options
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem
                disablePadding
                style={{
                  backgroundColor: "#E9E9E9",
                  padding: 30,
                  marginBottom: 1,
                  fontWeight: 100,
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
                      fontWeight={400}
                    >
                      competing products
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem
                disablePadding
                style={{
                  backgroundColor: "#E9E9E9",
                  padding: 30,
                  marginBottom: 1,
                  fontWeight: 100,
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
                      fontWeight={400}
                    >
                      downloads and guides
                    </Typography>
                  }
                />
              </ListItem>
            </Paper>
          </List>
        </Grid>
        <Grid xs={12} sm={4} md={8} marginLeft={2}>
          <Paper>
            <h1 style={{ textAlign: "center" }}>ProductDetails</h1>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default ProductDetails;
