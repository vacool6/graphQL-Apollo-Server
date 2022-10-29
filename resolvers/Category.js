exports.Category = {
  products: (parent, arg, { productList }) => {
    const { id } = parent;
    return productList.filter((product) => product.categoryID === id);
  },
};
