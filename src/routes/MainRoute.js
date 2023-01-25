import React from "react";
import {
  Routes,
  Route,
  useLocation,
  Navigate,
  Outlet,
  Link,
} from "react-router-dom";
import DetailLayout from "../Layouts/DetailLayout";
import CategoryPage from "../pages/CategoryPage";
import Details from "../pages/Details";
import Home from "../pages/Home";
import Loading from "../pages/Loading";
import MyCart from "../pages/MyCart";
import OrderPage from "../pages/OrderPage";
import ProductPage from "../pages/ProductPage";

const ProtectedRoute = ({ user, redirectPath = "/loading" }) => {
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};

function MainRoute() {
  const user = "jose";
  return (
    <Routes>
      {/* <Route index element={<Loading />} /> */}
      <Route path="loading" element={<Loading />} />
      <Route element={<ProtectedRoute user={user} />}>
        <Route path="/" element={<Home />} />
        <Route element={<DetailLayout />}>
          <Route path="/products" element={<ProductPage />} />
          <Route path="/cart" element={<MyCart />} />
          <Route path="/products/:id/:id" element={<Details />} />
          <Route path="/products/:id" element={<CategoryPage />} />
          <Route path="/orders" element={<OrderPage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default MainRoute;
