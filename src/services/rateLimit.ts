import * as RateLimit from 'express-rate-limit';
import * as RateLimitStore from 'rate-limit-redis';

import redis from './redis';

export default new RateLimit({
  store: new RateLimitStore({ client: redis }),
  windowMs: 15 * 60 * 1000,
  max: 100,
});
