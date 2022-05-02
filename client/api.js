import request from 'superagent'

const rootUrl = '/api/v1'

// EXTERNAL APIs
export const getPokemonApi = async (name) => {
  const res = await request
  .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
  return res.body
}

export const getSpeciesApi = async (name) => {
  const res = await request
  .get(`https://pokeapi.co/api/v2/pokemon-species/${name}/`)
  return res.body
}

// SERVER APIs
// GET
export const getAllPokemon = async () => {
  const res = await request
  .get(`${rootUrl}/pokemon`)
  return res.body
}

// POST
export const getPokemonDb = async (id) => {
  const res = await request
  .post(`${rootUrl}/pokemon`)
  .send(id)
  .catch(logError)
  return res.body
}

export const addUser = async (user) => {
  await request
  .post(`${rootUrl}/users`)
  .send(user)
  .catch(logError)
}

// ERROR MESSAGE
function logError(err) {
  if (err.message === 'Forbidden') {
    throw new Error(
      'Only the user who added the fruit may update and delete it'
    )
  } else {
    // eslint-disable-next-line no-console
    console.error('Error consuming the API (in client/api.js):', err.message)
    throw err
  }
}