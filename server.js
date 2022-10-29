const { ApolloServer, gql } = require("apollo-server");
const typeDefs = require("./schema");
const { productList, categories } = require("./fakeData");
const { Query } = require("./resolvers/Query");
const { Product } = require("./resolvers/Product");
const { Category } = require("./resolvers/Category");

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Product,
    Category,
  },
  context: {
    productList,
    categories,
  },
});

server
  .listen()
  .then(({ url }) => {
    console.log("Server running at" + url);
  })
  .catch((error) => console.log(error));
