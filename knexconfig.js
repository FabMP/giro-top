export const knexConfig = {
    development: {
      client: 'pg',
      connection: process.env.POSTGRES_URL+"?sslmode=require"
    }
  };