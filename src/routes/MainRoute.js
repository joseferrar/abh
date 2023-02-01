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
import Home from "../pages/Home";
import Loading from "../pages/Loading";
import MyCart from "../pages/MyCart";
import OrderPage from "../pages/OrderPage";
import ProductPage from "../pages/ProductPage";
import ProductDetails from "../pages/ProductDetails";
import ProductList from "../pages/ProductList";
import CartPage from "../pages/CartPage";

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
        <Route path="/products" element={<ProductPage />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/productList" element={<ProductList />} />     
        <Route path="/productDetails" element={<ProductDetails />} /> 
        <Route path="/cart" element={<CartPage />} />
      </Route>
    </Routes>
  );
}

export default MainRoute;
