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
}
`;
const resolvers = {
  Query: {
    challenges: () => {
      return Challenge.find();
    },
  },
};

export { typeDefs, resolvers };
