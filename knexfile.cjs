module.exports = {
  development: {
    client: 'pg',
    connection: process.env.POSTGRES_URL+"?sslmode=require"
  }
};
