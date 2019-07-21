import { apollo } from '../apollo';

interface Config {
  host?: string;
  port?: number;
  log?: any;
}

export default (
  app: any,
  { host = 'localhost', port = 4000, log = console.log }: Config = {}
) => {
  app.listen({ port }, () =>
    log(`🚀 Server ready at http://${host}:${port}${apollo.graphqlPath}`)
  );
};
