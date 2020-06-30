const database = require('../database')

module.exports = {
  ispindel: {
    getAll: () => {
      return database('ispindel')
    },
    create: (dataPoint) => {
      return database('ispindel').insert(dataPoint).returning('*')
    }
  }
}
