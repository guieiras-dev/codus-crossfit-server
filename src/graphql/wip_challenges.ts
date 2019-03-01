import WipChallenge from "../entities/wip_challenge";

const typeDefs = `
enum ChallengeProgress {
  TODO
  DOING
  DONE
}

type WipChallenge {
  id: ID!
  userEmail: String!
  status: ChallengeProgress!
  createdAt: DateTime!
  updatedAt: DateTime!
  challengeId: ID!
  challenge: Challenge!
}

extend type Query {
  wipChallenges: [WipChallenge]!
}
`;
const resolvers = {
  Query: {
    wipChallenges: () => WipChallenge.find(),
  },
};

export { typeDefs, resolvers };
