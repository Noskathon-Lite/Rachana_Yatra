import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function APrivateRoute({ children }) {
  const { currentUser } = useSelector((state) => state.persistedReducer.user);
  return currentUser ? <Navigate to="/" /> : children;
}

export default APrivateRoute;
