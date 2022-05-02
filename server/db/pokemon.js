const connection = require('./connection')

function getPokemon(id, db = connection) {
  return db('pokemon')
  .select()
  .where('id', id)
  .first()
}

const getAllPokemon = async (db = connection) => {
  const allPokemon = await db('pokemon')
  .select('name')

  return allPokemon.map(poke => poke.name)
}


module.exports = {
  getPokemon,
  getAllPokemon
}