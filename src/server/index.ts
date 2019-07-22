import createApp from './app';
import connectDb from './db';

export default async () => {
  await connectDb();
  createApp();
};
