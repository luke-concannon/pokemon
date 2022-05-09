const connection = require('./connection')

const getPokemon = async (id, db = connection) => {
  const onePokemon = await db('pokemon')
  .select()
  .where('id', id)
  .first()
  return onePokemon
}

const getAllPokemon = async (db = connection) => {
  const allPokemon = await db('pokemon')
  .select('name')
  return allPokemon.map(poke => poke.name)
}

const getPokemonOwners = async (db = connection) => {
  const pokemonOwners = await db('pokemon')
  .join('users', 'pokemon.owner', 'users.auth0_id')
  .select(
    'pokemon.name AS pokemonName',
    'pokemon.owner AS Owner',
    'users.auth0_id AS userId'
  )
  return pokemonOwners
}


module.exports = {
  getPokemon,
  getAllPokemon,
  getPokemonOwners
}