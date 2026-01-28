import React from "react";
import { Navigate } from "react-router-dom";

function withAuth(Component) {
  function AuthComponent(props) {
    const isLoggedIn = localStorage.getItem("login");

    if (!isLoggedIn) {
      return <Navigate to="/login" />;
    }

    return <Component {...props} />;
  }

  AuthComponent.displayName = `withAuth(${Component.name || "Component"})`;

  return AuthComponent;
}

export default withAuth;
