import request from 'superagent'

const rootUrl = '/api/v1'

export const addUser = async (user) => {
  await request.post(`${rootUrl}/users`)
  .send(user)
  .catch(logError)
}

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

export const getPokemon = async (id) => {
  const res = await request
  .post(`${rootUrl}/pokemon`)
  .send(id)
  .catch(logError)
  return res
}