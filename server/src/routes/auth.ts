import express, { Request, Response } from 'express';
import bcrypt from 'bcrypt';

const router = express.Router();

router.post('/register', async (req: Request, res: Response) => {
  try {
    const { email, name, password } = req.body;
  } catch (e) {}
});

router.post('/login', async (req: Request, res: Response) => {});

export default router;
