import React from "react";
import {
  UserCategoryList,
  SpecialSelections,
  FeaturedCategories,
  FindUsSection,
} from "./Components";
import "./main.css"

const Main = (): React.ReactElement => {
  return (
    <main className="w-[calc(100%-32px)] max-w-[1180px] m-auto">
      <UserCategoryList />
      <SpecialSelections />
      <FeaturedCategories />
      <FindUsSection />
    </main>
  );
};

export default Main;
