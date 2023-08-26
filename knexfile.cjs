module.exports = {
  development: {
    client: 'pg',
    connection: process.env.POSTGRES_URL+"?sslmode=require",
    migrations: {
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    }
  },
  production: {
    client: 'pg',
    connection: process.env.POSTGRES_URL+"?sslmode=require",
    migrations: {
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    }
  }
};
