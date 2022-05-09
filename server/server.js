const path = require('path')
const express = require('express')

const userRoutes = require('./routes/users')
const pokemonRoutes = require('./routes/pokemon')
const commentsRoutes = require('./routes/comments')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/users', userRoutes)
server.use('/api/v1/pokemon', pokemonRoutes)
server.use('/api/v1/comments', commentsRoutes)



server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

module.exports = server