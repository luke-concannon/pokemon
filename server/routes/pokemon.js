const express = require('express')
const db = require('../db/pokemon')

const router = express.Router()

// POST /api/v1/pokemon
router.post('/', async (req, res) => {
  const id = req.body.id
  console.log(id)
  try {
    const pokemon = await db.getPokemon(id)
    res.json(pokemon)
  } catch (err) {
    console.error(err)
    res.status(500).send(err.message)
  }
})

module.exports = router
