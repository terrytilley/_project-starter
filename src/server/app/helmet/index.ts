import * as helmet from 'helmet';

export default (app: any) => {
  app.use(helmet());
};
