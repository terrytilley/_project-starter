import { ConnectionOptions } from 'typeorm';

const config: ConnectionOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  database: process.env.POSTGRES_DB,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  logging: Boolean(process.env.TYPEORM_LOGGING),
  dropSchema: Boolean(process.env.TYPEORM_DROP_SCHEMA),
  synchronize: Boolean(process.env.TYPEORM_SYNCHRONIZE),
  entities: [`${__dirname}/entity/**/*{.ts,.js}`],
  migrations: [`${__dirname}/migrations/**/*{.ts,.js}`],
  subscribers: [`${__dirname}/subscribers/**/*{.ts,.js}`],
  cli: {
    entitiesDir: `${__dirname}/entity`,
    migrationsDir: `${__dirname}/migrations`,
    subscribersDir: `${__dirname}/subscribers`,
  },
};

export = config;
