const { ApolloServer, gql } = require("apollo-server");

const productList = [
  {
    id: "ce3114a1-ff26-4736-871e-ad6362bf5c55",
    name: "Name1",
    description: "Desc1",
    quantity: 23,
    price: 34.5,
    image: "img-1",
    onSale: true,
  },
  {
    id: "0dbb452f-719e-484d-9fca-824143d3666f",
    name: "Name2",
    description: "Desc2",
    quantity: 3,
    price: 38.5,
    image: "img-2",
    onSale: true,
  },
  {
    id: "1344d658-fc47-49a5-866e-e617d39533a2",
    name: "Name3",
    description: "Desc3",
    quantity: 45,
    price: 50,
    image: "img-3",
    onSale: false,
  },
];

const typeDefs = gql`
  type Query {
    hello: String
    products: [Product!]!
    product(id: ID!): Product
  }

  type Product {
    id: String!
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    image: String!
    onSale: Boolean
  }
`;

const resolvers = {
  Query: {
    hello: () => "Here we go!",
    products: () => productList,
    product: (parent, args, context) => {
      const product = productList.find((product) => product.id === args.id);
      if (product) return product;
      return null;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server
  .listen()
  .then(({ url }) => {
    console.log("Server running at" + url);
  })
  .catch((error) => console.log(error));
