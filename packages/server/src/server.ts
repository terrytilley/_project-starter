import 'reflect-metadata';

import * as cors from 'cors';
import * as express from 'express';

import { Connection } from 'typeorm';
import { GraphQLError } from 'graphql';
import { ApolloServer } from 'apollo-server-express';

import schema from './schema';
import { Context } from './types/index';
import { createTypeOrmConn } from './util/createTypeOrmConn';

export const startServer = async () => {
  let port: string;
  let connection: Connection;
  const app = express();

  const context = ({ req }: { req: express.Request }): Context => ({
    url: `${req.protocol}://${req.get('host')}`,
    req,
  });

  const formatError = (e: GraphQLError) => {
    if (process.env.NODE_ENV === 'development') {
      console.log(e);
    }
    return e;
  };

  const apolloServer = new ApolloServer({
    schema,
    context,
    formatError,
  });

  app.use(
    cors({
      credentials: true,
      origin: 'http://localhost:3000/',
    })
  );

  apolloServer.applyMiddleware({ app, path: '/' });

  port = process.env.PORT || '8000';
  connection = await createTypeOrmConn();
  await connection.runMigrations();

  const server = await app.listen({ port });

  return {
    port,
    server,
    connection,
    apolloServer,
  };
};
