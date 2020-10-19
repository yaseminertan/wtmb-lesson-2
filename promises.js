const fs=require('fs');  // filesystem, class of node

let readFile=(filename)=>{
    return new Promise((resolve,reject)=>{
        fs.readFile(filename,'utf8',(err,content)=>{
            if(err) return reject(err);
            resolve(content);
        });
    });
}

readFile(__dirname+'/textFiles/first.txt')
    .then(console.log)
    .then(()=>readFile(__dirname+'/textFiles/second.txt'))
    .then(console.log)
    .then(()=>readFile(__dirname+'/textFiles/third.txt'))
    .then(console.log)
    .catch(err=>console.log(err));