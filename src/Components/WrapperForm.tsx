import React from "react";
import { X } from "lucide-react";
import { h3Sizes } from "@src/data/styles";

const css = {
  wrapper: "w-full bg-white",
  wrapperTitle:
    "min-h-10 min-w-full mb-4 flex justify-between items-center gap-2 border-b border-gray-300 rounded-none",
  button: "h-9 min-w-9 br-xs centralize bg-bt absolute top-[10.5px] right-[10.5px]",
  icon: { strokeWidth: 2.3, size: 20 },
  h3: `${h3Sizes} leading-5`, 
};

interface WrapperFormProps {
  title: string;
  seeButtonClose: boolean;
  children: React.ReactElement;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}

const WrapperForm = ({
  title,
  seeButtonClose = true,
  children,
  setState,
}: WrapperFormProps): React.ReactElement => {
  return (
    <div className={`${css.wrapper}`}>
      <div className={`${css.wrapperTitle}`}>
        <p className={`${css.h3}`}>{title}</p>
        {seeButtonClose && (
          <button
            className={`${css.button}`}
            onClick={() => {
              setState(false);
            }}
          >
            <X {...css.icon} />
          </button>
        )}
      </div>
      {children}
    </div>
  );
};

export default WrapperForm;
