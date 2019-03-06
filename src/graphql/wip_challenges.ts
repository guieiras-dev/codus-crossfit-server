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
  wipChallenge(id: ID!): WipChallenge
}
`;
const resolvers = {
  Query: {
    wipChallenges: () => WipChallenge.find(),
    wipChallenge: async (obj: any, { id }: { id: string }) => {
      return WipChallenge.findOne({ id: parseInt(id, 10) });
    },
  },
};

export { typeDefs, resolvers };
