const fs = require('node:fs');

const text = fs.readFileSync('./nota.txt', 'utf8');

console.log(text);