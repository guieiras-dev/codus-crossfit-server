import "reflect-metadata";
import { GraphQLServer } from 'graphql-yoga';
import { createConnection } from 'typeorm';

import databaseConfig from './config/database';
import schema from './graphql'

const server = new GraphQLServer({ schema });

createConnection(databaseConfig).then(() => {
  server.start(() => {
    console.log('Server is running on http://localhost:4000')
  });
});
