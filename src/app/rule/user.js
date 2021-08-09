'use strict'

module.exports = (app) => {

  const users = async () => {
    return await app.QueryUser.users()
  }

  const addUser = async (data) => {

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

  return {
    users,
    addUser
  }
}
