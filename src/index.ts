import "reflect-metadata";
import { GraphQLServer } from 'graphql-yoga';
import { createConnection } from 'typeorm';
import databaseConfig from './config/database';
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
// import { GraphQLDateTime } from 'graphql-iso-date';

import {
  typeDefs as Challenges,
  resolvers as challengeResolvers
} from "./graphql/challenges";

import {
  typeDefs as WipChallenges,
} from "./graphql/wip_challenges";

const defaultTypeDefs = `
scalar DateTime

type Query {
  _empty: String
}
`;

// const defaultResolvers = {
//   DateTime: GraphQLDateTime,
// };

const typeDefs = [defaultTypeDefs, Challenges, WipChallenges];

const schema = makeExecutableSchema({
  typeDefs,
  resolvers: challengeResolvers
});

addMockFunctionsToSchema({
  schema,
  mocks: { DateTime: () => new Date("2019-02-18") },
  preserveResolvers: true
});

const server = new GraphQLServer({ schema });

createConnection(databaseConfig).then(() => {
  server.start(() => {
    console.log('Server is running on http://localhost:4000')
  });
});
