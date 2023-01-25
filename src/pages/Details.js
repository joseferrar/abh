import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getProductApi } from "../api";

function Details() {
  const location = useLocation();
  const data = location?.state;
  // console.log('details', location.pathname)

  return (
    <div>
      <h1>{data?.title}</h1>
      <img src={data?.image} width="300" height="300" alt="img" />
    </div>
  );
}

export default Details;
