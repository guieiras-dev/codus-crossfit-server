import { GraphQLError } from "graphql";
import WipChallenge, { ChallengeStatus } from "../entities/wip_challenge";

const typeDefs = `
enum ChallengeStatus {
  TODO
  DOING
  DONE
}

type WipChallenge {
  id: ID!
  userEmail: String!
  status: ChallengeStatus!
  createdAt: DateTime!
  updatedAt: DateTime!
  challengeId: ID!
  challenge: Challenge!
}

extend type Query {
  wipChallenges: [WipChallenge]!
  wipChallenge(id: ID!): WipChallenge
}

extend type Mutation {
  createWipChallenge(userEmail: String!, challengeId: ID!): WipChallenge!
  moveWipChallenge(id: ID!, newStatus: ChallengeStatus): WipChallenge
  deleteWipChallenge(id: ID!): WipChallenge
}
`;
const resolvers = {
  Query: {
    wipChallenges: () => WipChallenge.find(),
    wipChallenge: async (obj: any, { id }: { id: string }) => {
      return WipChallenge.findOne({ id: parseInt(id, 10) });
    },
  },
  Mutation: {
    createWipChallenge: (obj: any, { userEmail, challengeId }: WipChallenge) => {
      return WipChallenge.create({
        userEmail,
        challengeId,
        status: ChallengeStatus.TODO,
      }).save();
    },
    moveWipChallenge: async (obj: any, { id, newStatus }: { id: string, newStatus: ChallengeStatus }) => {
      try {
        const wipChallenge = await WipChallenge.findOneOrFail({ id: parseInt(id, 10) });
        wipChallenge.status = newStatus;
        return wipChallenge.save();
      } catch (error) {
        throw new GraphQLError("WIP Challenge not found");
      }
    },
    deleteWipChallenge: async (obj: any, { id }: { id: string }) => {
      try {
        const wipChallenge = await WipChallenge.findOneOrFail({ id: parseInt(id, 10) });
        const wipChallengeCopy = { ...wipChallenge };

        await WipChallenge.remove(wipChallenge);

        return wipChallengeCopy;
      } catch (error) {
        throw new GraphQLError("WIP Challenge not found");
      }
    },
  },
};

export { typeDefs, resolvers };
