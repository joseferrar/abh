import * as React from "react";
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
import { IoArrowForwardSharp } from "react-icons/io5";
import product_image from "../../images/product.png";

function RadioCard() {
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
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Typography style={{ fontWeight: "bold" }}>2-3/4"</Typography>
          <Typography style={{ fontFamily: "lato", marginLeft: 6, fontWeight: "normal" }}>
            Backset
          </Typography>
        </div>
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
          image={product_image}
        />

        <div
          className="redi"
          style={{
            width: "280px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: "14px 82px",
            backgroundColor: "#F4F4F4",
            marginTop: "20px",
            "&:hover": {
              backgroundColor: "red",
            },
          }}
        >
          <FormControl style={{ fontWeight: "bold" }}>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel
                className="custon-radio"
                value="other"
                control={<Radio />}
                label="$300.00"
              />
            </RadioGroup>
          </FormControl>
        </div>

        <CardActions style={{display: "flex", justifyContent: "center"}} className="radio-link">
          {/* <Button size="small">Share</Button>
          <Button size="small">Learn More</Button> */}
          <Typography style={{ fontFamily: "lato", marginLeft: 6, fontWeight: "normal" }}>
            More Information
          </Typography>
          <IoArrowForwardSharp style={{ marginLeft: 10, marginTop:4, fontSize: 26, fontWeight: "bold" }}/>
        </CardActions>
      </Card>
    </div>
  );
}

export default RadioCard;
