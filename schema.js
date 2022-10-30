const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    hello: String
    products(filter: ProductInputFilter): [Product!]!
    product(id: ID!): Product
    categories: [Category!]!
    category(id: ID!): Category
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
`;

module.exports = typeDefs;
