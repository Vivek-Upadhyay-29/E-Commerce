import React from "react";
import { Navigate, useLocation } from "react-router-dom";

function CheckAuth({ isAuthencticated, user, children }) {
  const location = useLocation();
  if (
    !isAuthencticated &&
    !(
      location.pathname.includes("/login") ||
      location.pathname.includes("/register")
    )
  ) {
    return <Navigate to="/auth/login" />;
  }

  if (
    isAuthencticated &&
    (Location.pathname.includes("/login") ||
      location.pathname.includes("/register"))
  ) {
    if (user?.role === "admin") {
      return <Navigate to="/admin/dashboard" />;
    } else {
      return <Navigate to="/shop/home" />;
    }
  }
  if (
    isAuthencticated &&
    user?.role !== "admin" &&
    location.pathname.includes("admin")
  ) {
    return <Navigate to="/unauth-page" />;
  }
  if (
    isAuthencticated &&
    user?.role === "admin" &&
    location.pathname.includes("shop")
  ) {
    return <Navigate TO="/admin/dashboard" />;
  }
  return <> {children}</>;
}

export default CheckAuth;
