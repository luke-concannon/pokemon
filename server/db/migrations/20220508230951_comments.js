exports.up = async (knex) => {
  await knex.schema.createTable('comments', (table) => {
    table.increments('id').primary()
    table.string('title')
    table.string('comment')
  })
}

exports.down = async(knex) => {
  await knex.schema.dropTable('comments')
}