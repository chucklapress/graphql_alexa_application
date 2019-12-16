const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    hello: String!
  }
`;
const resolvers = {
  Query: {
     hello: () => 'Todays fitness popups in your location are. locations brought in by aurora database or dynamodb or elasticsearch index'
  },
};
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
 console.log(`🚀 Server ready at ${url}`);
});
