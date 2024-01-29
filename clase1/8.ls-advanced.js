const fs = require('node:fs/promises')
const path = require('node:path')
const folder = process.argv[2] ?? '.'
const color = require('picocolors')

async function ls (folder) {
  let files
  try {
    files = await fs.readdir(folder)
  } catch {
    console.error(color.red(`No se ha podido leer el directorio: ${folder}`))
    process.exit(1)
  }
  const filesPromises = files.map(async file => {
    const filepath = path.join(folder, file)
    let stats
    try {
      stats = await fs.stat(filepath) // info
    } catch (error) {
      console.error(`No se ha podido leer el archivo: ${filepath}`)
      process.exit(1)
    }

    const isDirectory = stats.isDirectory()
    // d de directorio y f de fichero
    const fileType = isDirectory ? 'D' : 'F'
    const fileSize = stats.size
    const fileModified = stats.mtime.toLocaleDateString()

    return `${fileType} ${color.yellow(file.padEnd(20))} ${color.blue(fileSize.toString().padStart(10))} ${color.green(fileModified)}`
  })

  const filesInfo = await Promise.all(filesPromises)

  filesInfo.forEach(fileInfo => console.log(fileInfo))
}
ls(folder)
