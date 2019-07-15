import { createApp } from './app';
import { connectDb } from './db';

export const server = async () => {
  await connectDb();
  createApp();
};
