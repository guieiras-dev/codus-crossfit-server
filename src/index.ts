import "reflect-metadata";
import { GraphQLServer } from 'graphql-yoga';
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
// import { GraphQLDateTime } from 'graphql-iso-date';

import {
  typeDefs as Challenges,
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

const schema = makeExecutableSchema({ typeDefs })
addMockFunctionsToSchema({
  schema,
  mocks: { DateTime: () => new Date("2019-02-18") }
});

const server = new GraphQLServer({ schema });
server.start(() => console.log('Server is running on http://localhost:4000'));
