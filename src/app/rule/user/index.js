'use strict'

module.exports = {

  users: async (query) => {
    return await query.users()
  },

  addUser: async (query, data) => {

    if (Object.values(data).some(x => x === "")) {
      throw new Error('Dados inválidos')
    }

    const email = await query.userByEmail(data.email)

    if (email) {
      throw new Error('E-mail já existe')
    }

    const [user] = await query.addUser(data)

    return user
  }
}
