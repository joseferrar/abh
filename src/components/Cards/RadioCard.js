import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Typography from "@mui/material/Typography";
import Arrow_vector from "../../packages/images/Arrow_vector.png";

function RadioCard({ img, title, price, value, onChange, onClick }) {
  return (
    <div style={{ marginTop: 12 }}>
      <Card
        sx={{
          maxWidth: "280px",
          border: "1px solid #f4f4f4",
          paddingTop: 3,
          minHeight: "350px",
        }}
        elevation={0}
      >
        <CardMedia
          component="img"
          alt="green iguana"
          style={{
            width: "160px",
            height: "135px",
            marginRight: "auto",
            marginLeft: "auto",
            marginTop: "18px",
          }}
          image={img}
        />
        <Typography
          style={{
            fontFamily: "poppins-medium",
            marginLeft: 6,
            fontWeight: "normal",
            textAlign: "center",
          }}
        >
          {title}
        </Typography>
        <div
          onClick={onClick}
          className="redi"
          style={{
            width: "280px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: "1px 82px",
            backgroundColor: "#F4F4F4",
            marginTop: "20px",
            "&:hover": {
              backgroundColor: "#323B44",
            },
          }}
        >
          <FormControl style={{ fontWeight: "bold" }}>
            <FormControlLabel
              className="custon-radio"
              checked={value}
              onChange={onChange}
              control={<Radio />}
              label={`$${price}`}
            />
          </FormControl>
        </div>

        <CardActions
          style={{ display: "flex", justifyContent: "center" }}
          className="radio-link"
        >
          {/* <Button size="small">Share</Button>
          <Button size="small">Learn More</Button> */}
          <Typography
            style={{ fontFamily: "lato", marginLeft: 6, fontWeight: "normal" }}
          >
            More Information
          </Typography>
          <img
            src={Arrow_vector}
            alt="Arrow_vector"
            style={{
              marginLeft: 10,
              marginTop: 0,
              width: 20,
              fontWeight: "bold",
            }}
          />
        </CardActions>
      </Card>
    </div>
  );
}

export default RadioCard;
