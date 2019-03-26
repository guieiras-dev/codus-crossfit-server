import {
  AuthenticationError,
} from "apollo-server-errors";
import jwt from "jsonwebtoken";

const typeDefs = `
type User {
  id: ID!
  email: String!
}

type LoginResponse {
  jwt: ID!
  user: User
}

extend type Mutation {
  login(email: String!, password: String!): LoginResponse!
}
`;

const resolvers = {
  Mutation: {
    login: (obj: any, { email, password }: { email: string, password: string }) => {
      const user = { id: 1, email: "admin" };

      if (email === "admin" && password === "admin") {
        const token = jwt.sign(user, "CHANGE_ME");
        return { jwt: token, user };
      } else {
        throw new AuthenticationError("Invalid credentials");
      }
    },
  },
};
export {typeDefs, resolvers};
