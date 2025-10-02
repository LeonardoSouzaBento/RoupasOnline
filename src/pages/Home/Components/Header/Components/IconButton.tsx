import React from "react";
import type { LucideIcon } from "lucide-react";

export interface IconButtonType {
  icon: LucideIcon;
  isSearchButton?: boolean;
  name?: string;
}

const iconStyles = {
  strokeWidth: 2.3,
  size: 24,
  color: "oklch(26.9% 0 0)",
};

const IconButton = ({
  icon: Icon,
  isSearchButton,
  name,
}: IconButtonType): React.ReactElement => {
  const css = {
    wrapperButton: "centralize sm:pr-2 lg:pr-5 hover:bg-gray-100 trans rounded-sm",
    p: "hidden sm:inline font-h font-normal text-[1.000em] sm:text-[1.015em] md:text-[1.022em] lg:text-[1.036em] xl:text-[1.050em] 2xl:text-[1.064em] leading-none", 
    button: "button-square hover:bg-gray-100 trans",
    wrapperButtonSearch:
      "h-11 w-34 max-w-60 pl-5 pr-2 flex flex-auto justify-between items-center hover:bg-gray-100 trans lg:order-2 shadow-md",
    pSearch: "p-button",
    buttonSearch: "button-square",
  };

  return isSearchButton ? (
    <div className={css.wrapperButtonSearch}>
      <p className={css.pSearch}>Buscar</p>
      <button className={css.buttonSearch}>
        <Icon {...iconStyles} />
      </button>
    </div>
  ) : (
    <div className={css.wrapperButton}>
      <button className={css.button}>
        <Icon {...iconStyles} />
      </button>
      <p className={css.p}>{name}</p>
    </div>
  );
};

export default IconButton;
