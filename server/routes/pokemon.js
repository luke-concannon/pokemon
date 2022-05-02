const express = require('express')
const db = require('../db/pokemon')

const router = express.Router()

// GET /api/v1/pokemon
router.get('/', async (req, res) => {
  try {
    const allPokemon = await db.getAllPokemon()
    res.json(allPokemon)
  } catch (err) {
      res.status(500).send(err.message)
  }
  })

// POST /api/v1/pokemon
router.post('/', async (req, res) => {
  const id = req.body.id
  try {
    const pokemon = await db.getPokemon(id)
    res.json(pokemon)
  } catch (err) {
    console.error(err)
    res.status(500).send(err.message)
  }
})

module.exports = router
