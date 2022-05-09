exports.seed = async (knex) => {
  await knex('comments')
    .del()
    .insert([
        { id: 1, title: 'Pikachu is the best!', comment: 'Pikachu for the win. Pikachu for the win.Pikachu for the win.Pikachu for the win.Pikachu for the win.'},
        { id: 2, title: 'I love Onyx', comment: 'Onyx is by far the best pokemon EVER'},
    ])
    }