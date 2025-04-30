import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate } from "react-router";

const PrivateRouter = ({ children }) => {
  const { user, loading } = use(AuthContext);

  if (loading) {
    return (
      <>
        <span className="loading loading-bars loading-xs"></span>
        <span className="loading loading-bars loading-sm"></span>
        <span className="loading loading-bars loading-md"></span>
        <span className="loading loading-bars loading-lg"></span>
        <span className="loading loading-bars loading-xl"></span>
      </>
    );
  }

  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default PrivateRouter;
