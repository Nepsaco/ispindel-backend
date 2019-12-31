module.exports = {

  development: {
    client: 'pg',
      connection: 'postgress:///ispindel'
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
  }

};
