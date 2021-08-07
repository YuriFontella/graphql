exports.up = function (knex, Promise) {
  return knex.schema.createTable('users', function (table) {
    table.increments('id').index()
    table.string('name').notNullable()
    table.string('email').notNullable().unique()
    table.integer('age').notNullable()

    table.timestamps(false, true)
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("users")
}
