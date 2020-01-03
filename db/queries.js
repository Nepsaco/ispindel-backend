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
        getAll: () => {
            return database('users')
        },

        create: (user) => {
            return bcrypt.hash(user.password, 12)
                .then(hash => {
                    return database('users')
                        .insert({
                            username: user.username,
                            password_digest: hash
                        })
                        .returning(['id', 'username'])
                        .then(users => users[0])
                })
        }
    },
    login: {
        authorizeUser: (user) => {
            return database('users')
                .where({username: user.username})
                .first()
        }
    }
}
