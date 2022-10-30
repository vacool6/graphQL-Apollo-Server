exports.Product = {
  category: (parent, arg, { db }) => {
    const foundCategory = db.categories.find((e) => e.id === parent.categoryID);
    return foundCategory;
  },
  similarProducts: ({ categoryID, id }, arg, { db }) => {
    const similarProducts = db.productList.filter(
      (product) => product.categoryID === categoryID
    );
    return similarProducts.filter((product) => product.id !== id);
  },

  reviews: ({ id }, args, { db }) => {
    const Revs = db.reviews.filter((rev) => rev.productID === id);
    if (Revs.length === 0) return null;
    return Revs;
  },

  avgRatings: ({ id }, arg, { db }) => {
    const allRevs = db.reviews.filter((rev) => rev.productID === id);
    if (allRevs.length === 0) return 0;

    let sum = 0;
    for (let ratings of allRevs) {
      sum += ratings.rating;
    }
    return (sum / allRevs.length).toFixed(2);
  },
};
