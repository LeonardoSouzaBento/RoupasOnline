import React, { useState } from "react";
import { defaultUserCategoriesData } from "@src/data/home/userCategoriesData";

const css = {
  section: "title pt-4 pb-6",
  h1: "font-light text-neutral-800",
  h2: "subtitle",
  container:
    "w-full h-82 sm:h-[180px] max-w-220 m-auto centralize items-end flex-col gap-3 sm:gap-2 sm:flex-row relative",
  wrapper:
    "min-h-13 h-13 w-full sm:h-[156px] sm:w-1/3 bg-gray-100 flex items-end flex-auto crop relative transition-all duration-350 rounded-sm",
  selectedWrapper:
    "h-[200px] sm:h-[180px] sm:w-[50%]",
  wrapperImg: "size-full overflow-visible ",
  img: "size-auto absolute object-top object-cover scale-136 -translate-y-[8vw] sm:-translate-y-0 transition-transform duration-600 grayscale sepia-40 opacity-74 mix-blend-multiply",
  selectedImg: "-translate-y-[14vw] sm:-translate-y-[6vw] md:-translate-y-[3vw] opacity-100 mix-blend-normal grayscale-0",
  wrapperP:
    "h-full min-w-full w-full max-h-18 centralize relative bg-gradient-to-t from-black to-transparent",
  noSelectedWrapperP: "bg-stone-800 sm:bg-transparent",
  p: "text-white font-h uppercase font-light leading-none text-[1.148em] sm:text-[1.160em] md:text-[1.166em] lg:text-[1.178em] xl:text-[1.189em] 2xl:text-[1.200em]",
};

function getOrderClass(activeIndex: number, index: number): string {
  const orders = [
    ["order-2", "order-3", "order-1"], // quando ativo = 0
    ["order-1", "order-2", "order-3"], // quando ativo = 1
    ["order-3", "order-1", "order-2"], // quando ativo = 2
  ];
  return orders[activeIndex][index];
}

const UserCategoryList = (): React.ReactElement => {
  const [activeIndex, setActiveIndex] = useState<number>(1);

  return (
    <section className={css.section}>
      <h1 className={css.h1}>Selecione Sua Categoria</h1>
      <h2 className={`${css.h2}`}>Explore coleções recomendadas</h2>
      <div className={css.container}>
        {defaultUserCategoriesData.map((item, index) => {
          const orderClass = getOrderClass(activeIndex, index);
          return (
            <div
              key={item.id}
              onClick={() => {
                setActiveIndex(index);
              }}
              className={`${css.wrapper} ${
                activeIndex === index ? css.selectedWrapper : ""
              } ${orderClass}`}
            >
              <div className={`${css.wrapperImg}`}>
                <img
                  src={item.img}
                  alt={`Categoria ${index + 1}`}
                  className={`${css.img} ${
                    activeIndex === index ? css.selectedImg : ""
                  }`}
                />
              </div>
              <div
                className={`${css.wrapperP} ${
                  activeIndex !== index ? css.noSelectedWrapperP : ""
                }`}
              >
                <p className={`${css.p}`}>{item.label}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default UserCategoryList;
