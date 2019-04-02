import { GraphQLDateTime } from "graphql-iso-date";
import { makeExecutableSchema } from "graphql-tools";
import merge from "lodash/merge";

import {
  resolvers as challengeResolvers,
  typeDefs as Challenges,
} from "./challenges";

import {
  resolvers as wipChallengeResolvers,
  typeDefs as WipChallenges,
} from "./wip_challenges";

import {
  resolvers as authResolvers,
  typeDefs as Auth,
} from "./auth";

import { AuthDirective, authDirectiveDeclaration } from "./directives/auth";

const defaultTypeDefs = `
scalar DateTime

type Query {
  _empty: String
}

type Mutation {
  _empty: String
}
`;

const defaultResolvers = {
  DateTime: GraphQLDateTime,
};

const typeDefs = [
  defaultTypeDefs,
  authDirectiveDeclaration,
  Challenges,
  WipChallenges,
  Auth,
];

const schema = makeExecutableSchema({
  resolvers: merge(
    defaultResolvers,
    challengeResolvers,
    wipChallengeResolvers,
    authResolvers,
  ),
  typeDefs,
  schemaDirectives: {
    admin: AuthDirective,
  },
});

export default schema;
