const connection = require('./connection')

function getPokemon(id, db = connection) {
  return db('pokemon')
  .select()
  .where('id', id)
  .first()
}

module.exports = {
  getPokemon,
}