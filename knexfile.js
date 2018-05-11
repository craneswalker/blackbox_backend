module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/blackbox'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  },

};