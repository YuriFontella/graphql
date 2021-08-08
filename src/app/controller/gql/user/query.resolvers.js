'use strict'

const { resolve } = require('path')

const rule = require(resolve('src/app/rule/user'))

module.exports = {
  Query: {
    users: (parent, args, { app }) => {
      return rule.users(app.query)
    }
  }
}