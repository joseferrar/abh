import { Grid, Typography } from "@mui/material";
import React from "react";
import { Button, ButtonText } from "../Button";

function EmailSection() {
  return (
    <div
      style={{
        width: "100%",
        height: "280px",
        background: "#323B44",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 60,
      }}
    >
      <Grid>
        <Typography
          variant="h3"
          style={{
            fontFamily: "outfit-regular",
            fontSize: "32px",
            fontWeight: 600,
            color: "#fff",
            textAlign: "center",
          }}
        >
          Do You Have Any Questions?
        </Typography>
        <Button
          style={{
            borderRadius: 30,
            width: "137px",
            marginRight: "auto",
            marginLeft: "auto",
            marginTop: 30,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ButtonText>EMAIL US</ButtonText>
        </Button>
      </Grid>
    </div>
  );
}

export default EmailSection;
