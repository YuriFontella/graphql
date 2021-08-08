'use strict'

const { resolve } = require('path')

const rule = require(resolve('src/app/rule/user'))

module.exports = ({ query }) => {

  const users = () => {
    return rule.users(query)
  }

  return {
    users
  }
}