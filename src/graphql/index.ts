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
  resolvers as loginResolvers,
  typeDefs as Login,
} from "./login";

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

const typeDefs = [defaultTypeDefs, Challenges, WipChallenges, Login];

const schema = makeExecutableSchema({
  resolvers: merge(
    defaultResolvers,
    challengeResolvers,
    wipChallengeResolvers,
    loginResolvers,
  ),
  typeDefs,
});

export default schema;
