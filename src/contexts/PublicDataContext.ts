import { createContext } from "react";

/* Tipos */
export interface ShopInfo {
  name: string;
  address: string;
  contact: string;
}

/* Dados padrão */
export const defaultShopInfo: ShopInfo = {
  name: "Minha Loja Online",
  address:
    "Rua Antonio Filomeno, 123, Nossa Senhora Do Carmo, Caém - BA, Brasil",
  contact: "(34) 98412-5832",
};

/* Contexto */
export interface PublicDataContextType {
  shopInfo: ShopInfo;
  setShopInfo: (info: ShopInfo) => void;
}

export const PublicDataContext = createContext<PublicDataContextType>({
  shopInfo: defaultShopInfo,
  setShopInfo: () => {},
});
