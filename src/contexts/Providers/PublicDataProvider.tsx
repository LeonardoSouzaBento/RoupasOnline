import React, { useState } from "react";
import { PublicDataContext, defaultShopInfo } from "@contexts/PublicDataContext";
import type { ProviderType } from "@localtypes/types";
import type { ShopInfo } from "@contexts/PublicDataContext";


export const PublicDataProvider: React.FC<ProviderType> = ({ children }) => {
  const [shopInfo, setShopInfo] = useState<ShopInfo>(defaultShopInfo);
  return (
    <PublicDataContext.Provider value={{shopInfo, setShopInfo}}>{children}</PublicDataContext.Provider>
  );
};