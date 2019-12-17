const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    hello: String!
  }
`;
const resolvers = {
  Query: {
     hello: () => 'Todays fitness popups for your location  .yada yada and yada. these would be data points stored and queryed by an aurora database or dynamo D B  or an elasticsearch index'
  },
};
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
 console.log(`🚀 Server ready at ${url}`);
});
