import axios from "axios";

export const REACT_URL = axios.create({
  baseURL: "https://abh.colanonline.net/api/v1",
});

