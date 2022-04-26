exports.up = (knex) => {
  return knex.schema.createTable('pokemon', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('image')
    table.string('owner').references('users.auth0_id')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('pokemon')
}