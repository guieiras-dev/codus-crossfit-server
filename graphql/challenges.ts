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
    challenges: (_obj: any, _args: any) => {
      // TODO
    },
  },
};

export { typeDefs, resolvers };
