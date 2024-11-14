const fs=require('fs')
const readText=fs.readFileSync("./texts/test.txt","utf-8")
console.log(readText)