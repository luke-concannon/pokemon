exports.up = async(knex) => {
  await knex.schema.createTable('pokemon', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('image')
    table.string('owner').references('users.auth0_id')
  })
}

exports.down = async (knex) => {
  await knex.schema.dropTable('pokemon')
}