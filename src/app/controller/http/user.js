'use strict'

const { resolve } = require('path')

const rule = require(resolve('src/app/rule/user'))

module.exports = ({ query }) => {

  const users = async () => {
    return await rule.users(query)
  }

  const addUser = async (request) => {
    return await rule.addUser(query, request.body)
  }

  return {
    users,
    addUser
  }
}