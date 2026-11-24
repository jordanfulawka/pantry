import 'dotenv/config';

import express, { Request, Response } from 'express';
import authRouter from './routes/auth';

const app = express();
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('hello world!');
});

app.use('/auth', authRouter);

export { app };
