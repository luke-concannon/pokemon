exports.up = (knex) => {
  return knex.schema.alterTable('pokemon', table => {
    table.string('blurb');
  })
};

exports.down = (knex) => {
  return knex.schema.alterTable('pokemon', table => {
    table.dropColumn('blurb');
  })
};