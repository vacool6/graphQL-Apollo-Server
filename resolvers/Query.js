exports.Query = {
  hello: () => "Here we go!",
  products: (parent, { filter }, context) => {
    if (filter) {
      const { onSale } = filter;
      if (onSale) {
        return context.productList.filter((product) => product.onSale === true);
      }
    }
    return context.productList;
  },
  product: (parent, args, { productList }) => {
    const product = productList.find((product) => product.id === args.id);
    if (product) return product;
    return null;
  },
  categories: (parent, args, { categories }) => categories,
  category: (parent, { id }, { categories }) => {
    const foundCategory = categories.find((e) => e.id === id);
    if (foundCategory) return foundCategory;
    return null;
  },
};
