import configServer from "./config";
import { connect } from "./db";

const server = configServer();

connect().then(() => {
  server.start(() => {
    /* tslint:disable no-console */
    console.log("Server is running on http://localhost:4000");
  });
});
