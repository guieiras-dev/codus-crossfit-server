// import { gql } from "apollo-server";

// const typeDefs = gql`
const typeDefs = `
type Challenge {
  id: ID!
  title: String!
  description: String
}

extend type Query {
  challenges: [Challenge]!
}
`
// createdAt: Datetime!
// updatedAt: Datetime!
const mockChallenges = [{ id: 1, title: "Tittle", description: "Desc"}]
const resolvers = {
  Query: {
    challenges: (_obj: any, _args: any) => {
      return mockChallenges;
    },
  },
};

export { typeDefs, resolvers };
