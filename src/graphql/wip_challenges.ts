const typeDefs = `
type WipChallenge {
  id: ID!
  userEmail: String!
  status: String!
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
    wipChallenges: (_obj: any, _args: any) => {
      // TODO
    },
  }
};

export { typeDefs, resolvers };
