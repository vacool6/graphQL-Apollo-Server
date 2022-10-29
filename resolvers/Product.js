exports.Product = {
  category: (parent, arg, context) => {
    const foundCategory = context.categories.find(
      (e) => e.id === parent.categoryID
    );
    return foundCategory;
  },
  similarProducts: ({ categoryID, id }, arg, { productList }) => {
    const similarProducts = productList.filter(
      (product) => product.categoryID === categoryID
    );
    return similarProducts.filter((product) => product.id !== id);
  },
};
