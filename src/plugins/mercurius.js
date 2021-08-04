'use strict'

const fp = require('fastify-plugin')

const mercurius = require('mercurius')

const { typeDefs, resolvers } = require('../graphql/merge')

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
