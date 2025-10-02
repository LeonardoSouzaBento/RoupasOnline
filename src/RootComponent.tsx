import React from "react";
import AppRoutes from "./routes";
import { BrowserRouter } from "react-router-dom";

// para envolver BrowserRouter
// function AuthWrapper({ children }) {
//   useAuthToken();
//   return children;
// }

const RootComponent = (): React.ReactElement => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default RootComponent;