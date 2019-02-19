import { GraphQLServer } from 'graphql-yoga';
import {
  typeDefs as Challenges,
  resolvers
} from "./graphql/challenges";

const emptyQuery = `
type Query {
  _empty: String
}
`;
const typeDefs = [emptyQuery, Challenges];

const server = new GraphQLServer({ typeDefs, resolvers });
server.start(() => console.log('Server is running on localhost:4000'));
