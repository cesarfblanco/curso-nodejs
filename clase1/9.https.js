const http = require('node:http') // PROTOCOLO HTTP
const { availablePort } = require('./free-port')
const server = http.createServer((req, res) => {
  console.log('request received')
  res.end('Hola mundo2')
})

availablePort(8080).then((port) => {
  server.listen(port, () => {
    console.log(`server listening on port http://localhost:${server.address().port}`)
  })
})
