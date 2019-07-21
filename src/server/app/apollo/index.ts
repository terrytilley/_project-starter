import { ApolloServer } from 'apollo-server-express';
import { Request } from 'express';
import { GraphQLError } from 'graphql';

import schema from '../../../schema';
import redis from '../../../services/redis';
import { Context, Session } from '../../../types';

const context = ({ req }: { req: Request }): Context => ({
  url: `${req.protocol}://${req.get('host')}`,
  req,
  redis,
  session: req.session as Session,
});

const formatError = (err: GraphQLError) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(err);
  }

  return err;
};

const playground =
  process.env.NODE_ENV === 'production'
    ? false
    : {
        settings: {
          'request.credentials': 'include',
        },
      };

export const apollo = new ApolloServer({
  schema,
  context,
  formatError,
  playground,
});
