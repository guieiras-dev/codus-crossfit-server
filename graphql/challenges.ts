import {
  GraphQLDateTime
} from 'graphql-iso-date';

const mockChallenges = [
  {
    id: 1, title: "Tittle", description: "Desc",
    createdAt: new Date("2019-02-18"),
    updatedAt: new Date("2019-02-18")
  }
]

const typeDefs = `
scalar DateTime

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
    challenges: (_obj: any, _args: any) => {
      return mockChallenges;
    },
  },
  DateTime: GraphQLDateTime,
};

export { typeDefs, resolvers };
