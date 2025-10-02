import React from "react";

const css = {
  footer: "bg-white",
  wrapper: "w-[calc(100%-32px)] max-w-[768px] m-auto py-8",
  h1: "font-semibold",
  p: "p-4 pt-0",
  wrapperP: "w-full h-16 centralize bg-gradient-to-t from-black to-stone-800 rounded-none",
};

const Footer = (): React.ReactElement => {
  return (
    <footer className={`${css.footer}`}>
      <div className={`${css.wrapper}`}>
        <h1 className={`${css.h1}`}>Sobre Nós</h1>
        <h2>Conheça mais a nossa loja</h2>

        <p className={`${css.p}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dolorem
          architecto possimus. Porro placeat et possimus debitis architecto
          ipsum! Ipsum tempore architecto accusantium accusamus laborum vero eum
          suscipit dolore at.
        </p>
        <p className={`${css.p}`}>
          Culpa, saepe. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Fuga dolorem architecto possimus. Porro placeat et possimus debitis
          architecto ipsum! Ipsum tempore architecto accusantium accusamus
          laborum vero eum suscipit dolore at. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Fugiat laudantium, enim iste dignissimos
          autem eius a necessitatibus sunt laboriosam accusantium velit, sint
          libero et officiis, molestias commodi eligendi? Culpa, saepe.
        </p>
      </div>
      <div className={`${css.wrapperP}`}>
        <p></p>
      </div>
    </footer>
  );
};

export default Footer;
