import { GraphQLServer } from 'graphql-yoga';
import { GraphQLDateTime } from 'graphql-iso-date';
import { merge } from "lodash";

import {
  typeDefs as Challenges,
  resolvers as challengeResolvers
} from "./graphql/challenges";

const defaultTypeDefs = `
scalar DateTime

type Query {
  _empty: String
}
`;

const defaultResolvers = {
  DateTime: GraphQLDateTime,
};

const typeDefs = [defaultTypeDefs, Challenges];

const server = new GraphQLServer({ typeDefs, resolvers: merge(defaultResolvers, challengeResolvers) });
server.start(() => console.log('Server is running on http://localhost:4000'));
