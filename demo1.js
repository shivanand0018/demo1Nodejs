const http = require('http')

const route = require('./routes');

var server = http.createServer(route)
server.listen('3000')