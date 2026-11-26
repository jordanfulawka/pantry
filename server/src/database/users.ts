import { pool } from './pool';

async function createUser({
  email,
  name,
  hashed_password,
}: {
  email: string;
  name: string;
  hashed_password: string;
}) {
  const text =
    'INSERT INTO users(email, name, hashed_password) VALUES ($1, $2, $3) RETURNING *';
  const values = [email, name, hashed_password];

  const result = await pool.query(text, values);
  return result.rows[0];
}

async function getUserByEmail(email: string) {
  const text = 'SELECT * FROM USERS where email = $1';
  const values = [email];

  const result = await pool.query(text, values);
  return result.rows[0];
}

export { createUser, getUserByEmail };
