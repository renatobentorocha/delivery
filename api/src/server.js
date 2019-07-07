const express = require('express')
const cors = require('cors')

class App {
  constructor () {
    this.express = express()

    this.http = require('http').createServer(this.express)
    this.io = require('socket.io')(this.http)

    this.isDev = process.env.NODE_ENV !== 'production'
    this.middlewares()
    this.routes()
    this.socket()
  }

  middlewares () {
    this.express.use((req, res, next) => {
      req.io = this.io
      return next()
    })

    this.express.use(
      cors({
        origin: 'http://localhost:3333',
        credentials: true
      })
    )
    this.express.use(express.json())

    this.express.use(
      express.urlencoded({
        extended: false
      })
    )
  }

  routes () {
    this.express.use(require('./routes/index'))
  }

  socket () {
    this.io.on('connection', socket => {
      console.log('Connection')
    })
  }
}

module.exports = new App().http
