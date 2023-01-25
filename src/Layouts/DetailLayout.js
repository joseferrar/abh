import React from "react";
import PropTypes from "prop-types";
import Breadcrumbs from "../components/Breadcrumbs/index";
import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";

export default function DetailLayout() {
  return (
    <>
      <Breadcrumbs />
      <Outlet />
    </>
  );
}

DetailLayout.propTypes = {
  children: PropTypes.element,
};
