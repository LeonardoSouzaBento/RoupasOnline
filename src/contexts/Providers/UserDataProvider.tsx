import React, { useState } from "react";
import type { ProviderType } from "@src/types/types";
import type { UserData } from "../UserDataContext";
import { defaultUserData } from "../UserDataContext";
import { UserDataContext } from "../UserDataContext";

export const UserDataProvider : React.FC<ProviderType> = ({ children }) => {
  const [userData, setUserData] = useState<UserData>(defaultUserData);
  const [userCategory, setUserCategory] = useState<string>("male");

  return (
    <UserDataContext.Provider
      value={{ userData, setUserData, userCategory, setUserCategory }}
    >
      {children}
    </UserDataContext.Provider>
  );
};