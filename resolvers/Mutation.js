const { v4: uuid } = require("uuid");

exports.Mutation = {
  //CREATE
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

  //DELETE

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

  //UPDATE

  updateCategory: (parent, { id, input }, { db }) => {
    const { name } = input;
    const index = db.categories.findIndex((category) => category.id === id);
    if (index === -1) return "Category does ont exists";

    db.categories[index] = {
      ...db.categories[index],
      name,
    };
    return "Updated Category successfully!";
  },

  updateProduct: (parent, { id, input }, { db }) => {
    const index = db.productList.findIndex((product) => product.id === id);
    if (index === -1) return "Product does ont exists";
    db.productList[index] = {
      ...db.productList[index],
      ...input,
    };
    return "Updated Product successfully!";
  },

  updateReview: (parent, { id, input }, { db }) => {
    const index = db.reviews.findIndex((rev) => rev.id === id);
    if (index === -1) return "Review does ont exists";
    db.reviews[index] = {
      ...db.reviews[index],
      ...input,
    };
    return "Updated Review successfully!";
  },
};
