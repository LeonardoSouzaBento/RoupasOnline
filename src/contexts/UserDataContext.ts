import { createContext } from "react";

/* Tipos*/
export interface UserData {
  name: string;
  sex: string;
  category: string;
}

/* Dados padrão */
export const userCategories = ["male", "female", "child"];

export const defaultUserData: UserData = {
  name: "",
  sex: "male",
  category: userCategories[0],
};

/* Contexto */
export interface UserDataContextType {
  userData: UserData;
  setUserData: (info: UserData) => void;
  userCategory: string;
  setUserCategory: (value: string) => void;
}

export const UserDataContext = createContext<UserDataContextType>({
  userData: defaultUserData,
  setUserData: () => {},
  userCategory: userCategories[0],
  setUserCategory: () => {},
});
