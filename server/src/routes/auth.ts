import express, { Request, Response } from 'express';

const router = express.Router();

router.post('/login', (req: Request, res: Response) => {
  res.json({ message: 'login route' });
});

export default router;
