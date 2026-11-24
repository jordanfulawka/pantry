import { pool } from './pool';

async function register({
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

function login() {}

export { register };
