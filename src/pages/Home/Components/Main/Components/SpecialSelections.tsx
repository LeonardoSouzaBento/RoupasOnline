import React from "react";
import { Heart } from "lucide-react";

const products = [
  { name: "", price: "", img1: "", img2: "", alt: "" },
  { name: "", price: "", img1: "", img2: "", alt: "" },
  { name: "", price: "", img1: "", img2: "", alt: "" },
  { name: "", price: "", img1: "", img2: "", alt: "" },
  { name: "", price: "", img1: "", img2: "", alt: "" },
];

const css = {
  section: "pb-0",
  h1: "",
  wrapper: "crop",
  scrollableDiv: "flex gap-2 pb-8",
  wrapperProduct:
    "h-[95vw] min-w-[80vw] sm:h-[480px] sm:min-w-[420px] md:min-w-89 flex flex-col items-end shadow-md hover:shadow-lg fast-trans border br-sm",
  wrapperImgs: "size-full flex border-b-2 border-gray-300 relative",
  imgs: "size-full bg-gray-100 object-cover bg-white",
  img1: "min-w-[40%] border-r-1 border-gray-300 bg-gray-100 ",
  img2: "min-w-[60%] ",
  wrapperInfo: "w-full h-38 p-4 flex flex-col items-start gap-2 bg-white",
  nameP: "capitalize",
  priceP: "",
  buttonHeart:
    "h-10 w-10 centralize absolute bottom-1 right-1 bg-gray-100 hover:bg-gray-100 fast-trans",
};

const SpecialSelections = (): React.ReactElement => {
  return (
    <section className={`${css.section}`}>
      <h1 className={`${css.h1}`}>Seleções especiais</h1>
      <h2>Nossas peças mais bonitas</h2>

      <div className={`${css.wrapper}`}>
        <div className={`${css.scrollableDiv}`}>
          {products.map((item, index) => (
            <div key={index} className={`${css.wrapperProduct}`}>
              <div className={`${css.wrapperImgs}`}>
                <button className={`${css.buttonHeart}`}>
                  <Heart strokeWidth={1.75} />
                </button>
                <img
                  src={item.img1 || "null"}
                  alt={`Img do produto: ${item.alt}` }
                  className={`${css.img1} ${css.imgs}`}
                />
                <img
                  src={item.img2 || "null"}
                  alt={`Img do produto: ${item.alt}`}
                  className={`${css.img2} ${css.imgs}`}
                />
              </div>
              <div className={`${css.wrapperInfo}`}>
                <p className={`${css.nameP}`}>
                  {item.name} Lorem ipsum, dolor sit amet consectetur
                  adipisicing
                </p>
                <p className={`${css.priceP}`}>{item.price}R$ 00,00</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialSelections;
