import "reflect-metadata";
import { GraphQLServer } from 'graphql-yoga';
import { connect } from './db';

import schema from './graphql'

const server = new GraphQLServer({ schema });

connect().then(() => {
  server.start(() => {
    console.log('Server is running on http://localhost:4000')
  });
});
