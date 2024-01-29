const path = require('path')

// barra separadora de carpetas segun sistema operativo
console.log(path.sep)

// unir rutas con path join

const filepath = path.join('content', 'subfolder', 'text.txt')
console.log(filepath)

const base = path.basename('/primeracarp/segundacarp/tercCarpt/password.txt')
console.log(base)
