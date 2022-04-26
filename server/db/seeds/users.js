exports.seed = (knex) => {
  return knex('users')
    .del()
    .then(() => {
      return knex('users').insert([
        { auth0_id: 'auth0|123', name: 'Joe' },
        { auth0_id: 'auth0|567', name: 'Sammie' },
      ])
    })
}