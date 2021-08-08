'use strict'

const fp = require('fastify-plugin')

const query = async (app) => {

  app.decorate('query', {
    users: users,
    addUser: addUser,
    userByEmail: userByEmail
  })

  async function users() {
    return await app.knex('users')
  }

  async function addUser(data) {
    return await app.knex('users').insert(data).returning('*')
  }

  async function userByEmail(email) {
    return await app.knex('users').where('email', email).first()
  }
}

module.exports = fp(async (app) => {
  app.register(fp(query))
})