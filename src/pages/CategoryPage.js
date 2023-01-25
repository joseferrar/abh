import React from "react";
import { useLocation } from "react-router-dom";
import { Container, Divider, Typography } from "@mui/material";
import EmailSection from "../components/Sections/EmailSection";
import FooterSection from "../components/Sections/FooterSection";
import BottomSection from "../components/Sections/BottomSection";

function CategoryPage(props) {
  const location = useLocation();
  const { category } = location.state;
  console.log(category);
  return (
    <div>
      <Container maxWidth="xl">
        <Typography
          variant="h4"
          style={{
            marginTop: 30,
            fontFamily: "montserrat-bold",
            fontSize: 36,
            marginBottom: 20,
          }}
        >
          {category?.categoryDesc}
        </Typography>
        <Divider />
      </Container>
      <EmailSection />
      <FooterSection />
      <BottomSection />
    </div>
  );
}

export default CategoryPage;
