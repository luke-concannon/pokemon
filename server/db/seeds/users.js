exports.seed = async (knex) => {
  await knex('users')
    .del()
    .insert([
        { auth0_id: 'auth0|123', name: 'Joe' },
        { auth0_id: 'auth0|567', name: 'Sammie' },
    ])
    }