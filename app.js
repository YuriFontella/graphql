'use strict'

const fastify = require('fastify')

const autoload = require('fastify-autoload')

const { join } = require('path')

const app = fastify({
  logger: true
})

app.register(autoload, {
  dir: join(__dirname, 'src/infra')
})

app.register(autoload, {
  dir: join(__dirname, 'src/app/rule')
})

app.listen(process.env.PORT || 4000, '0.0.0.0')