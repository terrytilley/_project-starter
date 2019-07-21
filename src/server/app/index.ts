import * as express from 'express';

import cors from './cors';
import listen from './listen';
import session from './session';

export const createApp = () => {
  const app = express();

  cors(app);
  session(app);
  listen(app);
};
