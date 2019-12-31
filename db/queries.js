const database = require('./database')

module.exports = {
    ispindel: {
        getAll: () => {
            return knex('ispindel')
        }
    }
}
