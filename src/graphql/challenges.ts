import Challenge from "../entities/challenge";

const typeDefs = `
type Challenge {
  id: ID!
  title: String!
  description: String
  createdAt: DateTime!
  updatedAt: DateTime!
}

extend type Query {
  challenges: [Challenge]!
  challenge(challengeId: ID!): Challenge
}
extend type Mutation {
  createChallenge(title: String!, description: String!): Challenge
}
`;
const resolvers = {
  Query: {
    challenges: () => {
      return Challenge.find();
    },
    challenge: async (_obj: any, { challengeId }: { challengeId: string }) => {
      return Challenge.findOne({ id: parseInt(challengeId) });
    }
  },
  Mutation: {
    createChallenge: (_obj: any, { title, description }: { title: string, description: string }) => {
      const challenge = Challenge.create();
      challenge.title = title;
      challenge.description = description;

      return challenge.save();
    }
  }
};

export { typeDefs, resolvers };
