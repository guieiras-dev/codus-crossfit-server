/* tslint:disable no-console */
import { GraphQLServer } from "graphql-yoga";
import "reflect-metadata";

import { connect } from "./db";
import schema from "./graphql";

if (process.env.NODE_ENV !== "production") {
  // tslint:disable-next-line: no-var-requires
  require("dotenv").config();
}

if (!process.env.SECRET_KEY) {
  throw new Error("ENV VAR SECREY_KEY must be set!");
}

const server = new GraphQLServer({
  schema,
  context: () => {
    return { secretKey: process.env.SECRET_KEY! };
  },
});

connect().then(() => {
  server.start(() => {
    console.log("Server is running on http://localhost:4000");
  });
});
