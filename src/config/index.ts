import { GraphQLServer } from "graphql-yoga";
import schema from "../graphql";

export default function configServer() {
  ensureEnvVars();

  return new GraphQLServer({
    schema,
    context: () => {
      return { secretKey: process.env.SECRET_KEY! };
    },
  });
}

function ensureEnvVars() {
  if (process.env.NODE_ENV !== "production") {
    // tslint:disable-next-line: no-var-requires
    require("dotenv").config();
  }

  if (!process.env.SECRET_KEY) {
    throw new Error("ENV VAR SECREY_KEY must be set!");
  }
}
