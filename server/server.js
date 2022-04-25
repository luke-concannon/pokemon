const path = require('path')
const express = require('express')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.get('/greeting', (req, res) => {
  const greetings = ['hola', 'hi', 'hello', 'howdy']
  let index = Math.floor(Math.random() * greetings.length)
  console.log(index)
  res.json({ greeting: greetings[index] })
})

module.exports = server
