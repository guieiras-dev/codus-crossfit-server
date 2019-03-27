import {
  AuthenticationError,
} from "apollo-server-errors";
import jwt from "jsonwebtoken";
import User, { UserRoles } from "../entities/user";

const typeDefs = `
enum UserRole {
  USER
  ADMIN
}

type User {
  id: ID!
  name: String!
  email: String!
  encryptedPassword: String!
  roles: [UserRole!]!
}

type LoginResponse {
  jwt: ID!
  user: User
}

extend type Mutation {
  signIn(email: String!, password: String!): LoginResponse!
  signUp(name: String!, email: String!, password: String!): User!
}
`;

interface IUserSignIn {
  email: string;
  password: string;
}

interface IUserSignUp {
  name: string;
  email: string;
  password: string;
}

const resolvers = {
  Mutation: {
    signIn: async (obj: any, { email, password }: IUserSignIn, { secretKey }: { secretKey: string }) => {
      try {
        const user = await User.findOneOrFail({ email });
        if (await user.validPassword(password)) {
          const token = jwt.sign({ id: user.id }, secretKey);

          return { jwt: token, user };
        } else {
          throw new Error("Invalid password");
        }

      } catch (error) {
        throw new AuthenticationError("Invalid Credentials");
      }
    },
    signUp: async (obj: any, { name, email, password }: IUserSignUp) => {
      const user = User.create({name, email});
      await user.setPassword(password);
      user.roles = user.roles.concat(UserRoles.ADMIN);

      return user.save();
    },
  },
};
export {typeDefs, resolvers};
