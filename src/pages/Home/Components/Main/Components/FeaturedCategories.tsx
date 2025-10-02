import React from "react";
import { defaultSpecialCategoriesData } from "@src/data/home/specialCategoriesData";

const css = {
  container: `
    w-full h-[133vw]
    grid grid-cols-2 grid-rows-2 gap-2 sm:px6
    md:h-[33vw] md:flex md:flex-row md:gap-2 lg:h-[400px]
  `,
  h2: "",
  wrapperImg: `
    w-full h-full bg-gray-100 flex items-end relative overflow-hidden
    md:w-1/4 md:h-full br-sm
  `,
  img: "absolute inset-0 w-full h-full object-cover object-top scale-106 sepia-30",
  wrapperP:
    "h-auto w-full py-7 centralize relative bg-gradient-to-t from-black to-transparent",
  p: "w-full px-8 text-white font-h font-normal h1-sizes sm:text-center leading-none",
};

const FeaturedCategories = (): React.ReactElement => {
  return (
    <section>
      <h1>Categorias de Destaque</h1>
      <h2>Os mais procurados</h2>
      <div className={`${css.container}`}>
        {defaultSpecialCategoriesData.male.map((item, index) => (
          <div key={index} className={`${css.wrapperImg}`}>
            <img src={item.url} alt={item.alt} className={`${css.img}`} />
            <div className={`${css.wrapperP}`}>
              <p className={`${css.p}`}>{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCategories;
