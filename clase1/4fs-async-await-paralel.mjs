import { readFile } from 'node:fs/promises'
// paralelizar la asincronia lee los dos

Promise.all([
  readFile('./nota.txt', 'utf8'),
  readFile('./nota2.txt', 'utf8')
]).then(([nota1, nota2]) => {
  console.log('Primera nota: ', nota1)
  console.log('Segunda nota: ', nota2)
})
