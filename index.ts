import { GraphQLServer } from 'graphql-yoga';
import { GraphQLDateTime } from 'graphql-iso-date';
import { merge } from "lodash";

import {
  typeDefs as Challenges,
  resolvers as challengeResolvers
} from "./graphql/challenges";

import {
  typeDefs as WipChallenges,
  resolvers as wipChallengeResolvers
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

const server = new GraphQLServer({
  typeDefs, resolvers: merge(defaultResolvers, challengeResolvers, wipChallengeResolvers)
});
server.start(() => console.log('Server is running on http://localhost:4000'));
