import { ConnectionOptions } from 'typeorm';

const config: ConnectionOptions & { seeds: string[]; factories: string[] } = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  database: process.env.POSTGRES_DB,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  logging: Boolean(process.env.TYPEORM_LOGGING),
  dropSchema: Boolean(process.env.TYPEORM_DROP_SCHEMA),
  synchronize: Boolean(process.env.TYPEORM_SYNCHRONIZE),
  entities: [`${__dirname}/entity/**/*.ts`],
  migrations: [`${__dirname}/migrations/**/*.ts`],
  subscribers: [`${__dirname}/subscribers/**/*.ts`],
  seeds: [`${__dirname}/seeds/**/*.seed.ts`],
  factories: [`${__dirname}/factories/**/*.factory.ts`],
  cli: {
    entitiesDir: `${__dirname}/entity`,
    migrationsDir: `${__dirname}/migrations`,
    subscribersDir: `${__dirname}/subscribers`,
  },
};

export = config;
