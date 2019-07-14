import { connectDb } from './db';
import { createApp } from './app';

export const server = async () => {
  await connectDb();
  await createApp();
};
