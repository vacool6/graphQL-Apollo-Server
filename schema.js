const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    hello: String
    products(filter: ProductInputFilter): [Product!]!
    product(id: ID!): Product
    categories: [Category!]!
    category(id: ID!): Category
  }

  type Mutation {
    addProduct(input: AddProductInput!): Product!
    addCategory(input: AddCategoryInput!): [Category!]!
    addReview(input: AddReview!): Review!
    deleteCategory(id: ID!): String!
    deleteProduct(id: ID!): String!
    deleteReview(id: ID!): Boolean!
    updateCategory(id: ID!, input: UpdateCategoryInput!): String!
    updateProduct(id: ID!, input: UpdateProductInput!): String!
    updateReview(id: ID!, input: UpdateReview!): String!
  }

  type Product {
    id: ID!
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    image: String!
    onSale: Boolean
    category: Category
    similarProducts: [Product!]
    reviews: [Review!]
    avgRatings: Float!
  }

  type Category {
    id: ID!
    name: String!
    products(filter: ProductInputFilter): [Product!]!
  }

  type Review {
    id: ID!
    date: String!
    comment: String!
    rating: Int!
  }

  input ProductInputFilter {
    onSale: Boolean
  }

  input AddCategoryInput {
    name: String!
  }
  input UpdateCategoryInput {
    name: String!
  }

  input AddProductInput {
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    image: String!
    onSale: Boolean
    categoryID: ID!
  }
  input UpdateProductInput {
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    image: String!
    onSale: Boolean
    categoryID: ID!
  }

  input AddReview {
    productID: String!
    date: String!
    comment: String!
    rating: Int!
  }

  input UpdateReview {
    productID: String!
    date: String!
    comment: String!
    rating: Int!
  }
`;

module.exports = typeDefs;
