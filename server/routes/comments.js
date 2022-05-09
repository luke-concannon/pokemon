const express = require('express')
const db = require('../db/comments')

const router = express.Router()

// GET /api/v1/comments
router.get('/', async (req, res) => {
  try {
    const allComments = await db.getComments()
    res.json(allComments)
  } catch (err) {
      res.status(500).send(err.message)
  }
  })

// POST /api/v1/pokemon
router.post('/', async (req, res) => {
  try {
    const newComment = await db.addComment(req.body)
    res.json(newComment)
  } catch (err) {
    console.error(err)
    res.status(500).send(err.message)
  }
})

module.exports = router
