import { ConnectionOptions } from 'typeorm';

const config: Array<ConnectionOptions> = [
  {
    name: 'production',
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT),
    database: process.env.POSTGRES_DB,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    logging: false,
    dropSchema: false,
    synchronize: false,
    entities: [`${__dirname}/src/entity/**/*{.ts,.js}`],
    migrations: [`${__dirname}/src/migrations/**/*{.ts,.js}`],
    subscribers: [`${__dirname}/src/subscribers/**/*{.ts,.js}`],
    cli: {
      entitiesDir: 'src/entity',
      migrationsDir: 'src/migration',
      subscribersDir: 'src/subscriber',
    },
  },
  {
    name: 'development',
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT),
    database: process.env.POSTGRES_DB,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    logging: true,
    dropSchema: true,
    synchronize: true,
    entities: [`${__dirname}/src/entity/**/*{.ts,.js}`],
    migrations: [`${__dirname}/src/migrations/**/*{.ts,.js}`],
    subscribers: [`${__dirname}/src/subscribers/**/*{.ts,.js}`],
    cli: {
      entitiesDir: 'src/entity',
      migrationsDir: 'src/migration',
      subscribersDir: 'src/subscriber',
    },
  },
];

export = config;
