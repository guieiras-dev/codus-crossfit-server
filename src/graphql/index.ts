import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import { GraphQLDateTime } from 'graphql-iso-date';
import merge from 'lodash/merge';

import {
  typeDefs as Challenges,
  resolvers as challengeResolvers
} from "./challenges";

import {
  typeDefs as WipChallenges,
  resolvers as wipChallengeResolvers,
} from "./wip_challenges";

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

export default schema;
