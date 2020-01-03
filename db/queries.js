const database = require('./database')
const bcrypt = require('bcrypt')

module.exports = {
    ispindel: {
        getAll: () => {
            return database('ispindel')
        }, 
        create: (dataPoint) => {
            return database('ispindel').insert(dataPoint).returning('*')
        }
    },
    user: {
        create: (user) => {
            return bcrypt.hash(user.password, 12)
                .then(hash => {
                    return database('users').insert({
                        username: user.username,
                        password_digest: hash
                })
            }).returning(['id', 'username', 'password_digest'])
        }
    }
}
