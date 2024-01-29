// Para el async await hay que transformar a mjs o da problemas
import { readFile } from 'node:fs/promises'

console.log('Leyendo la primera nota')
const text = await readFile('./nota.txt', 'utf8')
console.log('Primera nota: ', text)
console.log('Hace cosas mientras lee el primer archivo')

console.log('Leyendo la segunda nota')
const secondText = await readFile('./nota.txt', 'utf8')
console.log('Segunda nota: ', secondText)
console.log('Hace cosas mientras lee el segundo archivo')
