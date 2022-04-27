const connection = require('./connection')

// function userExists(username, db = connection) {
//   return db('users')
//     .count('id as n')
//     .where('username', username)
//     .then((count) => {
//       return count[0].n > 0
//     })
// }

// function getUserByName(username, db = connection) {
//   return db('users')
//   .select()
//   .where('username', username)
//   .first()
// }

function getPokemon(id, db = connection) {
  return db('pokemon')
  .select()
  .where('id', id)
  .first()
}

module.exports = {
//   userExists,
//   getUserByName,
  getPokemon,
}