/* eslint-disable indent */
const fs = require('node:fs')
// recuperar informacion de un archivo
const stats = fs.statSync('./nota.txt')

console.log(
    stats.isFile(),
    stats.isDirectory(),
    stats.isSymbolicLink(),
    stats.size
    // eslint-disable-next-line eol-last
)