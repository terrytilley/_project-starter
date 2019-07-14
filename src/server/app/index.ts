import * as express from 'express';

import { cors } from './cors';
import { listen } from './listen';

export const createApp = () => {
  const app = express();
  cors(app);
  listen(app);
};
