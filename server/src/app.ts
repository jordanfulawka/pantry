import 'dotenv/config';

import express, { Request, Response } from 'express';
import authRouter from './routes/auth';
import { getCurrentTime } from './db/db';

const app = express();
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('hello world!');
});

app.use('/auth', authRouter);

app.get('/time', async (req, res) => {
  const time = await getCurrentTime();
  console.log(time);
  return res.json(time);
});

app.listen(3000, () => {
  console.log('app listening on port 3000');
});
