'use strict'

const fp = require('fastify-plugin')

const mercurius = require('mercurius')

const { resolve } = require('path')

const { typeDefs, resolvers } = require(resolve('src/gql/merge'))

const { makeExecutableSchema } = require('@graphql-tools/schema')

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

module.exports = fp(async (app) => {
  app.register(mercurius, {
    schema,
    graphiql: true
  })
})
