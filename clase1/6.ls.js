const fs = require('node:fs')

// El punto es del directorio actual, el err lo toma por defecto para que controlemos el error, y el files son los archivos que estan dentro del directorio
fs.readdir('.', (err, files) => {
  if (err) {
    console.error('Error al leer el archivo: ', err)
    return
  }

  files.forEach(file => {
    console.log(file)
  })
})
