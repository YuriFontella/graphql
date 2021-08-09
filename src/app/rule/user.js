'use strict'

const fp = require('fastify-plugin')

const rule = async (app) => {

  app.decorate('RuleUser', {

    users: async () => {
      return await app.QueryUser.users()
    },

    addUser: async (data) => {

      if (Object.values(data).some(x => x === "")) {
        throw new Error('Dados inválidos')
      }

      const email = await app.QueryUser.userByEmail(data.email)

      if (email) {
        throw new Error('E-mail já existe')
      }

      const [user] = await app.QueryUser.addUser(data)

      return user
    }

  })
}

module.exports = fp(rule)