import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import { Home } from "../pages/Home/Home";
import { Contact } from "../pages/Contact/Contact";
import { Shop } from "../pages/Shop/Shop";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Brands } from "../pages/Brands/Brands.jsx";
import { NotFound } from "../pages/NotFound/NotFound";
import { Login } from "../pages/Login/Login";
import { Register } from "../pages/Register/Register";
import { Product } from "../pages/Product/Product";
import { Cart } from "../pages/Cart/Cart";
import Checkout from "../pages/Checkout/Checkout";
import { Profile } from "../pages/Profile/Profile";

export const Layot = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname != "/login" && location.pathname != "/register" ? (
        <Header />
      ) : (
        ""
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product/:id" element={<Product />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      {location.pathname === "/" ||
      location.pathname === "/contact" ||
      location.pathname === "/shop" ||
      location.pathname === "/cart" ||
      location.pathname === "/brands" ? (
        <Footer />
      ) : (
        ""
      )}
    </>
  );
};
