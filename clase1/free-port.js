const net = require('node:net')

function availablePort (desiredPort) {
  return new Promise(function (resolve, reject) {
    const server = net.createServer()

    server.listen(desiredPort, () => {
      const { port } = server.address()
      server.close(() => {
        resolve(port)
      })
    })
    server.on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        availablePort(0).then(port => resolve(port))
      } else {
        reject(err)
      }
    })
  })
}

module.exports = { availablePort }
