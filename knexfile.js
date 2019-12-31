module.exports = {

  development: {
    client: 'pg',
      connection: 'postgress:///ispindel'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
  }

};
