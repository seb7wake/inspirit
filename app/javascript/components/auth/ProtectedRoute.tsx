import React from "react";
import { Route, Navigate, Outlet } from "react-router-dom";

const isAuthenticated = () => {
  const token = localStorage.getItem("jwt");
  // Optionally, add logic to verify the token's validity (e.g., expiration)
  return !!token;
};

const ProtectedRoute = ({ ...rest }) => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/signin" />;
};

export default ProtectedRoute;
