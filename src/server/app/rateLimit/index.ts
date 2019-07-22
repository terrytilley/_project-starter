import rateLimit from '../../../services/rateLimit';

export default (app: any) => {
  if (process.env.NODE_ENV === 'production') {
    app.use(rateLimit);
  }
};
