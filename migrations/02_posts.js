exports.up = function (knex, Promise) {
  return knex.schema.createTable('posts', function (table) {
    table.increments('id').index()
    table.string('title', 255).notNullable()
    table.string('description', 255).notNullable().unique()
    table
      .integer('user_id')
      .unsigned()
      .references('users.id')
      .notNullable()
      .index()
      .onDelete('CASCADE')

    table.timestamps(false, true)
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("posts")
}
