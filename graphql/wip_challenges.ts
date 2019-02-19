const mockWipChallenges = [
  {
    id: 1, challengeId: 1,
    userEmail: "email@com",
    status: "DOING",
    createdAt: new Date("2019-02-18"),
    updatedAt: new Date("2019-02-18"),
    challenge: {
      id: 1, title: "Title1", description: "Desc",
      createdAt: new Date("2019-02-18"),
      updatedAt: new Date("2019-02-18")
    }
  }
];

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
      return mockWipChallenges;
    },
  }
};

export { typeDefs, resolvers };
