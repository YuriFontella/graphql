'use strict'

module.exports = (app) => {

  const users = async () => {
    return await app.RuleUser.users()
  }

  const addUser = async (request) => {
    return await app.RuleUser.addUser(request.body)
  }

  return {
    users,
    addUser
  }
}