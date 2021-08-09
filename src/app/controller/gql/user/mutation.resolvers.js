'use strict'

module.exports = {
  Mutation: {
    addUser: async (parent, { user }, { app }) => {
      return await app.RuleUser.addUser(user)
    }
  }
}