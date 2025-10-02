/* Categorias especiais */
const pathMale = "/photos/male/mainCategories/";
const pathFemale = "/photos/female/mainCategories/";

export const defaultSpecialCategoriesData = {
  male: [
    {
      name: "Polos",
      file: "polos.png",
      alt: "Polos e camisetas masculinas",
    },
    {
      name: "Jeans & Calças",
      file: "jeans.png",
      alt: "Calças jeans e sociais masculinas",
    },
    {
      name: "Casual & Esporte",
      file: "casual.png",
      alt: "Roupas casuais masculinas",
    },
    { name: "Social", file: "social.png", alt: "Roupas sociais masculinas" },
  ].map((c) => ({ ...c, url: pathMale + c.file })),
  female: [
    {
      name: "Vestidos & Saias",
      file: "vestidos.jpg",
      alt: "Vestidos e saias femininas",
    },
    {
      name: "Blusas & Camisetas",
      file: "blusas.jpg",
      alt: "Blusas e camisetas femininas",
    },
    {
      name: "Jeans & Calças",
      file: "jeans.jpg",
      alt: "Calças jeans femininas",
    },
    {
      name: "Social & Elegante",
      file: "social.jpg",
      alt: "Roupas sociais femininas",
    },
  ].map((c) => ({ ...c, url: pathFemale + c.file })),
};
