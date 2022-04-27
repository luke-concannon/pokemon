const path = require('path')
const express = require('express')

const userRoutes = require('./routes/users')
const pokemonRoutes = require('./routes/pokemon')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/users', userRoutes)
server.use('/api/v1/pokemon', pokemonRoutes)


server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

module.exports = server