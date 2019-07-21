import { apollo } from '../apollo';

export default (app: any) => {
  apollo.applyMiddleware({
    app,
    cors: {
      credentials: true,
      origin: 'http://localhost:3000',
    },
  });
};
