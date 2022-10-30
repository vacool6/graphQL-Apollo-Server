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

  reviews: ({ id }, args, { reviews }) => {
    const Revs = reviews.filter((rev) => rev.productID === id);
    if (Revs.length === 0) return null;
    return Revs;
  },

  avgRatings: ({ id }, arg, { reviews }) => {
    const allRevs = reviews.filter((rev) => rev.productID === id);
    if (allRevs.length === 0) return 0;

    let sum = 0;
    for (let ratings of allRevs) {
      sum += ratings.rating;
    }
    return (sum / allRevs.length).toFixed(2);
  },
};
