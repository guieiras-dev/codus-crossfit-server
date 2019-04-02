import { GraphQLError } from "graphql";
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
  challenge(id: ID!): Challenge
}
extend type Mutation {
  createChallenge(title: String!, description: String!): Challenge @admin
  updateChallenge(id: ID!, title: String, description: String): Challenge @admin
  deleteChallenge(id: ID!): Challenge @admin
}
`;
interface IUpdateChallenge {
  id: string;
  title: string;
  description: string;
}

const resolvers = {
  Query: {
    challenges: () => {
      return Challenge.find();
    },
    challenge: async (obj: any, { id }: { id: string }) => {
      return Challenge.findOne({ id: parseInt(id, 10) });
    },
  },
  Mutation: {
    createChallenge: (obj: any, { title, description }: { title: string, description: string }) => {
      return Challenge.create({ title, description }).save();
    },
    deleteChallenge: async (obj: any, { id }: { id: string }) => {
      try {
        const challenge = await Challenge.findOneOrFail({ id: parseInt(id, 10) });
        const challengeCopy = { ...challenge };

        await Challenge.remove(challenge);

        return challengeCopy;
      } catch (error) {
        throw new GraphQLError("Challenge not found");
      }
    },
    updateChallenge: async (obj: any, { id, title, description }: IUpdateChallenge) => {
      try {
        const challenge = await Challenge.findOneOrFail({ id: parseInt(id, 10) });
        const updatedChallenge = Challenge.merge(challenge, { title, description });

        return updatedChallenge.save();
      } catch (error) {
        throw new GraphQLError("Challenge not found");
      }
    },
  },
};

export { typeDefs, resolvers };
