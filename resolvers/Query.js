exports.Query = {
  hello: () => "Here we go!",
  products: (parent, { filter }, { db }) => {
    if (filter) {
      const { onSale } = filter;
      if (onSale) {
        return db.productList.filter((product) => product.onSale === true);
      }
    }
    return db.productList;
  },
  product: (parent, args, { db }) => {
    const product = db.productList.find((product) => product.id === args.id);
    if (product) return product;
    return null;
  },
  categories: (parent, args, { db }) => db.categories,
  category: (parent, { id }, { db }) => {
    const foundCategory = db.categories.find((e) => e.id === id);
    if (foundCategory) return foundCategory;
    return null;
  },
};
