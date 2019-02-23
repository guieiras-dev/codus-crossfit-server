import "reflect-metadata";
import { GraphQLServer } from 'graphql-yoga';
import { createConnection } from 'typeorm';
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import { GraphQLDateTime } from 'graphql-iso-date';
import merge from 'lodash/merge';
import databaseConfig from './config/database';

import {
  typeDefs as Challenges,
  resolvers as challengeResolvers
} from "./graphql/challenges";

import {
  typeDefs as WipChallenges,
  resolvers as wipChallengeResolvers,
} from "./graphql/wip_challenges";

const defaultTypeDefs = `
scalar DateTime

type Query {
  _empty: String
}
`;

const defaultResolvers = {
  DateTime: GraphQLDateTime,
};

const typeDefs = [defaultTypeDefs, Challenges, WipChallenges];

const schema = makeExecutableSchema({
  typeDefs,
  resolvers: merge(defaultResolvers, challengeResolvers, wipChallengeResolvers)
});

addMockFunctionsToSchema({ schema, preserveResolvers: true });

const server = new GraphQLServer({ schema });

createConnection(databaseConfig).then(() => {
  server.start(() => {
    console.log('Server is running on http://localhost:4000')
  });
});
