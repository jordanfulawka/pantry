import express, { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { createUser, getUserByEmail } from '../database/users';

const router = express.Router();

router.post('/register', async (req: Request, res: Response) => {
  const { email, name, password } = req.body ?? {};

  if (!email || !name || !password) {
    return res
      .status(400)
      .json({ error: 'email, name and password are required' });
  }

  const hashed_password = await bcrypt.hash(password, 10);
  const user = await createUser({ email, name, hashed_password });

  res.status(201).json(user);
});

router.post('/login', async (req: Request, res: Response) => {
  const { email, password } = req.body ?? {};

  if (!email || !password) {
    return res.status(400).json({ error: 'email and password are required' });
  }

  const user = await getUserByEmail(email);

  const match = await bcrypt.compare(password, user.hashed_password);

  if (match) {
    res.status(200).json(user);
  } else {
    res.status(401).json({ error: 'invalid credentials' });
  }
});

export default router;
