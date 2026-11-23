import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.POSTGRES_CONNECTION_STRING,
});

async function getCurrentTime() {
  const text = 'SELECT NOW()';
  const result = await pool.query(text);
  return result.rows[0];
}

export { getCurrentTime };
