import { createConnection } from 'typeorm';
import * as config from '../ormconfig';

export const createTypeOrmConn = async () => {
  return createConnection(config);
};
