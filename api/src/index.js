require('dotenv/config')

const server = require('./server')

server.listen(process.env.PORT || process.env.EXPRESS_PORT)
