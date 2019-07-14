import { startServer } from './server';

startServer().then(({ port, apolloServer }) => {
  console.log(`🚀 Server ready at http://localhost:${port}${apolloServer.graphqlPath}`);
});