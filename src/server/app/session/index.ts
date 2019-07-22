import * as connectRedis from 'connect-redis';
import * as session from 'express-session';

import { redisSessionPrefix } from '../../../constants';
import redis from '../../../services/redis';

export default (app: any) => {
  const RedisStore = connectRedis(session);

  app.use(
    session({
      store: new RedisStore({
        client: redis as any,
        prefix: redisSessionPrefix,
      }),
      name: 'qid',
      resave: false,
      saveUninitialized: false,
      secret: process.env.SESSION_SECRET!,
      cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
      },
    })
  );
};
