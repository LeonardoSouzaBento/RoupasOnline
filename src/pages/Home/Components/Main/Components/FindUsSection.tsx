import React, { useContext } from "react";
import { PublicDataContext } from "@contexts/PublicDataContext";
import { Copy } from "lucide-react";

const css = {
  wrapper: "w-full sm:max-w-max m-auto flex flex-col gap-2",
  wrapperInfoOne: "w-full p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 bg-white border-gray-200 shadow-md hover:shadow-lg fast-trans",
  wrapperInfoTwo: "w-full sm:w-100 flex justify-start items-center flex-auto gap-4 py-3",
  button:
    "w-65 h-10 px-5 gap-3 justify-start bg-gray-100 hover:bg-gray-200 fast-trans",
  img: "",
  wrapperMap: "w-full h-[50vw] md:h-[40vw] lg:h-[25vw] m-auto p-4 bg-white shadow-md hover:shadow-lg fast-trans",
};

const iconStyles = {
  strokeWidth: 1.8,
  size: 18,
  color: "oklch(26.9% 0 0)",
};

const FindUsSection = (): React.ReactElement => {
  const { shopInfo } = useContext(PublicDataContext);

  return (
    <section className="border-none">
      <h1>Nos Encontre</h1>
      <h2>Visite nossa loja ou fale conosco</h2>
      <div>
        <div className={`${css.wrapper}`}>
          <div className={`${css.wrapperInfoOne}`}>
            <div className={`${css.wrapperInfoTwo}`}>
              <span className="material-symbols-outlined">call</span>
              <p>
                <strong>Whatsapp:</strong> <br /> {shopInfo.contact}
              </p>
            </div>
            <button className={`${css.button}`}>
              <Copy {...iconStyles}/>
              Copiar Telefone
            </button>
          </div>

          <div className={`${css.wrapperInfoOne}`}>
            <div className={`${css.wrapperInfoTwo}`}>
              <span className="material-symbols-outlined">home_pin</span>
              <p>
                <strong>Onde estamos:</strong> <br /> {shopInfo.address}
              </p>
            </div>
            <button className={`${css.button}`}>
              <Copy {...iconStyles} />
              Copiar Link Do Mapa
            </button>
          </div>
          <div className={`${css.wrapperMap}`}>
            <iframe className="rounded-sm" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1957.645384050795!2d-40.43701879862941!3d-11.091693430701477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x76ce50be0507481%3A0x8abcc8307f84985b!2sPra%C3%A7a%20Desembargador%20Souza%20Dias!5e0!3m2!1spt-BR!2sbr!4v1759400849290!5m2!1spt-BR!2sbr" width="100%" height="100%" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
        <div>{/*Endereço no mapa, imagem do mapa no local exato*/}</div>
      </div>
    </section>
  );
};

export default FindUsSection;
