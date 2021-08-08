'use strict'

const { resolve } = require('path')

const rule = require(resolve('src/app/rule/user'))

module.exports = {
  Mutation: {
    addUser: async (parent, { user }, { app }) => {
      return await rule.addUser(app.query, user)
    }
  }
}