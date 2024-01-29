const os = require('os')

console.log('Informacion del sitema operativo')
console.log('----------------------------------------------------------------')
console.log('Nombre del sitema operativo', os.platform())
console.log('Versión del sitema operativo', os.release())
console.log('Arquitectura', os.arch())
// eslint-disable-next-line eol-last
console.log('CPUs', os.cpus())