exports.up = async (knex) => {
  await knex.schema.createTable('users', (table) => {
    table.string('auth0_id').primary()
    table.string('name')
    table.string('email')
  })
}

exports.down = async(knex) => {
  await knex.schema.dropTable('users')
}