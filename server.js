const { ApolloServer, gql } = require("apollo-server");

const productList = [
  {
    id: "ce3114a1-ff26-4736-871e-ad6362bf5c55",
    name: "Fork",
    description: "Desc1",
    quantity: 23,
    price: 34.5,
    image: "img-1",
    onSale: true,
    categoryID: "1344d658-fc47-49a5-866e-e617d39533d2",
  },
  {
    id: "0dbb452f-719e-484d-9fca-824143d3666f",
    name: "Football",
    description: "Desc2",
    quantity: 3,
    price: 38.5,
    image: "img-2",
    onSale: true,
    categoryID: "1344d658-fc47-49a5-866e-e617d39533b2",
  },
  {
    id: "1344d658-fc47-49a5-866e-e617d39533a2",
    name: "Cricket kit",
    description: "Desc3",
    quantity: 45,
    price: 50,
    image: "img-3",
    onSale: false,
    categoryID: "1344d658-fc47-49a5-866e-e617d39533b2",
  },
  {
    id: "ce3114a1-ff26-4736-871e-ad6362bf5zwe",
    name: "Butter",
    description: "Desc4",
    quantity: 235,
    price: 12,
    image: "img-4",
    onSale: true,
    categoryID: "1344d658-fc47-49a5-866e-e617d39533d2",
  },
  {
    id: "ce3114a1-ff26-4736-871e-ad6362bf5c44",
    name: "spoon",
    description: "Desc5",
    quantity: 23,
    price: 3.5,
    image: "img-5",
    onSale: false,
    categoryID: "1344d658-fc47-49a5-866e-e617d39533d2",
  },
];

const categories = [
  {
    id: "1344d658-fc47-49a5-866e-e617d39533b2",
    name: "Sports",
  },
  {
    id: "1344d658-fc47-49a5-866e-e617d39533d2",
    name: "Kitchen",
  },
];

const typeDefs = gql`
  type Query {
    hello: String
    products: [Product!]!
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
    similarProducts(id: ID!): [Product]
  }

  type Category {
    id: ID!
    name: String!
    products: [Product!]!
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
    categories: () => categories,
    category: (parent, arg, context) => {
      const { id } = arg;
      const foundCategory = categories.find((e) => e.id === id);
      if (foundCategory) return foundCategory;
      return null;
    },
  },

  Category: {
    products: (parent, arg, context) => {
      const { id } = parent;
      return productList.filter((product) => product.categoryID === id);
    },
  },

  Product: {
    category: (parent, arg, context) => {
      const foundCategory = categories.find((e) => e.id === parent.categoryID);
      return foundCategory;
    },
    similarProducts: (parent, arg, context) => {
      const similarProducts = productList.filter(
        (product) => product.categoryID === arg.id
      );
      return similarProducts.filter((product) => product.id !== parent.id);
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
