export const knexConfig = {
    development: {
      client: 'pg',
      connection: process.env.POSTGRES_URL_NON_POOLING
    }
  };