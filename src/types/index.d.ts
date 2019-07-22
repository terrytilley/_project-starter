import { Redis } from 'ioredis';
import { Request } from 'express';

export interface Context {
  url: string;
  req: Request;
  redis: Redis;
  session: Session;
}

export interface Session extends Express.Session {
  userId?: string;
}

export type Resolver = (parent: any, args: any, context: Context, info: any) => any;

export interface ResolverMap {
  [key: string]: {
    [key: string]: Resolver;
  };
}
