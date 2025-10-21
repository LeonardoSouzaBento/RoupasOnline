import React from "react";
import AppRoutes from "./routes";
import { BrowserRouter } from "react-router-dom";
import { UserDataProvider } from "./contexts/Providers/UserDataProvider";
import { HomeDataProvider } from "./contexts/Providers/HomeDataProvider";

// para envolver BrowserRouter
// function AuthWrapper({ children }) {
//   useAuthToken();
//   return children;
// }

const RootComponent = (): React.ReactElement => {
  return (
    <HomeDataProvider>
      <UserDataProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </UserDataProvider>
    </HomeDataProvider>
  );
};

export default RootComponent;
