const fs=require('fs');  // filesystem, class of node
let readFile=(filename)=>{
    return new Promise((resolve,reject)=>{
        fs.readFile(filename,'utf8',(err,content)=>{
            if(err) return reject(err);
            resolve(content);
        });
    });
}

async function main(){
    const content1=await readFile(__dirname+'/textFiles/first.txt');
    console.log(content1);
    const content2=await readFile(__dirname+'/textFiles/second.txt');
    console.log(content2);
    const content3=await readFile(__dirname+'/textFiles/third.txt');
    console.log(content3);
}
main();
console.log('I am the first one!');