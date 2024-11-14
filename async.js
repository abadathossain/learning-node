const fs=require('fs');
fs.readFile('./texts/read.txt','utf-8',(err,data)=>{
    if(err){
        throw Error('Error reading text')
    }
    console.log(data)

   


})

 // writting
 fs.writeFile('./texts/read2.txt','utf-8',(err)=>{
    if(err){
        throw Error('Error writing')
    }
})