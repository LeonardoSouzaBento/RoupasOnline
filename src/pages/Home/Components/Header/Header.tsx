import React from "react";
import IconButton from "./Components/IconButton";
import { User, Menu, Search, Heart } from "lucide-react"; // ⚡ use "lucide-react" em vez de "lucide"
import type { IconButtonType } from "./Components/IconButton";

const buttonNameIcons: IconButtonType[] = [
  { icon: User, name: "Minha Conta" },
  { icon: Menu, name: "Mais Opções" },
  { icon: Search, isSearchButton: true },
  { icon: Heart, name: "Favoritos" },
];

const Header = (): React.ReactElement => {
  const css = {
    header: "bg-white sticky top-0 left-0 z-5 shadow-md",
    wrapper:
      "w-[calc(100%-32px)] max-w-[1180px] m-auto py-3 sm:py-4 flex justify-between items-center flex-wrap gap-4 sm:flex-nowrap md:justify-center lg:gap-8 bg-white",
    divLogo:
      "w-full h-20 bg-gradient-to-t from-black to-stone-800 centralize flex-col relative z-8 rounded-none",
    nav: "h-16 w-full flex justify-between items-center sm:justify-center gap-5 flex-auto lg:gap-5",
    pSubtitle: "leading-none text-white font-p font-light text-[1.020em] sm:text-[1.026em] md:text-[1.029em] lg:text-[1.034em] xl:text-[1.040em] 2xl:text-[1.046em]",
    pLogo: "leading-none font-logo text-white text-[1.780em] sm:text-[1.830em] md:text-[1.854em] lg:text-[1.902em] xl:text-[1.950em] 2xl:text-[1.998em]", 
  };

  return (
    <>
      <div className={`${css.divLogo}`}>
        <p className={`${css.pLogo}`}>Roupas Online</p>
        <p className={`${css.pSubtitle}`}>Guardamos suas curtidas</p>
      </div>
      <header className={css.header}>
        <div className={`${css.wrapper}`}>
          <nav className={`${css.nav}`}>
            {buttonNameIcons.map((button, index) => (
              <IconButton
                key={index}
                icon={button.icon}
                isSearchButton={button.isSearchButton}
                name={button.name}
              />
            ))}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
