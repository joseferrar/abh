import React from "react";
import { useLocation } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link, NavLink, useRoutes } from "react-router-dom";
import Home from "../../pages/Home";
import MyCart from "../../pages/MyCart";
import Details from "../../pages/ProductDetails";
import { Container } from "@mui/material";

const Bread = (props) => {
  const location = useLocation();
  console.log(props);

  const breadcrumbs = useBreadcrumbs();

  return (
    <Container maxWidth="xl">
      {breadcrumbs.map(({ breadcrumb, match }, index) => {
        const data = breadcrumb.props.children?.split("%20");
        const num = data[data.length]?.replace(/[0-9]/g, " ");
        const final = data + num;
        const link = final.replace("undefined", "");
        const link2 = link.replaceAll(",", " ");
      
      
        // console.log(link2);
        return (
          <>
            <NavLink
              key={index}
              to={match.pathname}
              style={{
                fontSize: 16,
                textDecoration: "none",
                fontWeight: 600,
                color: match.pathname === location.pathname ? "#000" : "gray",
                fontFamily: "poppins-light"
              }}
            >
              {link2}
            </NavLink>
            {index !== breadcrumbs.length - 1 && (
              <ArrowForwardIosIcon
                style={{ fontSize: 13, marginLeft: 6, marginRight: 6 }}
              />
            )}
          </>
        );
      })}
    </Container>
  );
};

export default Bread;
