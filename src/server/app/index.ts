import * as express from 'express';

import cors from './cors';
import helmet from './helmet';
import listen from './listen';
import rateLimit from './rateLimit';
import session from './session';

export default () => {
  const app = express();

  cors(app);
  helmet(app);
  session(app);
  rateLimit(app);
  listen(app);
};
