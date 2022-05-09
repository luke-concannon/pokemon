const connection = require('./connection')

const getComments = async (db = connection) => {
  const allComments = await db('comments')
  .select()
  return allComments
}

const addComment = async (newComment, db = connection) => {
  const latestComment = await db('comments')
  .insert(newComment)
  return latestComment
}

module.exports = {
  getComments,
  addComment
}