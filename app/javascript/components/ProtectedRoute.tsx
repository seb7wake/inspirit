import React from "react";
import { Route, Navigate, Outlet } from "react-router-dom";
import { currentUser } from "../context";
import { useReactiveVar } from "@apollo/client";
import { getCurrentUser } from "../api/auth";

const ProtectedRoute = ({ ...rest }) => {
  const user = useReactiveVar(currentUser);

  const isAuthenticated = () => {
    return !!localStorage.getItem("jwt");
  };

  if (isAuthenticated() && !user) {
    getCurrentUser();
  }
  return isAuthenticated() ? <Outlet {...rest} /> : <Navigate to="/signin" />;
};

export default ProtectedRoute;
