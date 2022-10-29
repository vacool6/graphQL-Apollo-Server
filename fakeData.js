const productList = [
  {
    id: "ce3114a1-ff26-4736-871e-ad6362bf5c55",
    name: "Fork",
    description: "Desc1",
    quantity: 23,
    price: 34.5,
    image: "img-1",
    onSale: true,
    categoryID: "1344d658-fc47-49a5-866e-e617d39533d2",
  },
  {
    id: "0dbb452f-719e-484d-9fca-824143d3666f",
    name: "Football",
    description: "Desc2",
    quantity: 3,
    price: 38.5,
    image: "img-2",
    onSale: true,
    categoryID: "1344d658-fc47-49a5-866e-e617d39533b2",
  },
  {
    id: "1344d658-fc47-49a5-866e-e617d39533a2",
    name: "Cricket kit",
    description: "Desc3",
    quantity: 45,
    price: 50,
    image: "img-3",
    onSale: false,
    categoryID: "1344d658-fc47-49a5-866e-e617d39533b2",
  },
  {
    id: "ce3114a1-ff26-4736-871e-ad6362bf5zwe",
    name: "Butter",
    description: "Desc4",
    quantity: 235,
    price: 12,
    image: "img-4",
    onSale: true,
    categoryID: "1344d658-fc47-49a5-866e-e617d39533d2",
  },
  {
    id: "ce3114a1-ff26-4736-871e-ad6362bf5c44",
    name: "spoon",
    description: "Desc5",
    quantity: 23,
    price: 3.5,
    image: "img-5",
    onSale: false,
    categoryID: "1344d658-fc47-49a5-866e-e617d39533d2",
  },
];

const categories = [
  {
    id: "1344d658-fc47-49a5-866e-e617d39533b2",
    name: "Sports",
  },
  {
    id: "1344d658-fc47-49a5-866e-e617d39533d2",
    name: "Kitchen",
  },
];

module.exports = { productList, categories };
