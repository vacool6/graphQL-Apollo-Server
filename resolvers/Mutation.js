const { v4: uuid } = require("uuid");

exports.Mutation = {
  addCategory: (parent, { input }, { db }) => {
    const { name } = input;
    const newCategory = {
      id: uuid(),
      name,
    };
    db.categories.push(newCategory);
    return db.categories;
  },

  addProduct: (parent, { input }, { db }) => {
    const { name, description, quantity, price, image, onSale, categoryID } =
      input;

    const newProduct = {
      id: uuid(),
      name,
      description,
      quantity,
      price,
      image,
      onSale,
      categoryID,
    };

    db.productList.push(newProduct);
    return newProduct;
  },

  addReview: (parent, { input }, { db }) => {
    const { date, comment, rating, productID } = input;
    const newReview = {
      id: uuid(),
      productID,
      date,
      comment,
      rating,
    };
    db.reviews.push(newReview);
    return newReview;
  },

  deleteCategory: (parent, { id }, { db }) => {
    db.categories = db.categories.filter((category) => category.id !== id);
    return "Successfully deleted category!";
  },

  deleteProduct: (parent, { id }, { db }) => {
    db.productList = db.productList.filter((product) => product.id !== id);
    db.reviews = db.reviews.filter((rev) => rev.productID !== id);
    console.log(db.reviews);
    return "Successfully deleted Product!";
  },

  deleteReview: (parent, { id }, { db }) => {
    db.reviews = db.reviews.filter((rev) => rev.id !== id);
    console.log(db.reviews);
    return true;
  },
};
