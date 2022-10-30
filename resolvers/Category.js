exports.Category = {
  products: ({ id }, { filter }, { productList }) => {
    const productsInCategory = productList.filter(
      (product) => product.categoryID === id
    );
    if (filter) {
      const { onSale } = filter;
      if (onSale) {
        return productsInCategory.filter((product) => product.onSale === true);
      }
    }
    return productsInCategory;
  },
};
