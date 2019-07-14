import { apollo } from '../apollo';

export const cors = (app: any) => {
  apollo.applyMiddleware({
    app,
    cors: {
      credentials: true,
      origin: 'http://localhost:3000',
    },
  });
};
