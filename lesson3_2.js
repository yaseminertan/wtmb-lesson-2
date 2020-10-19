const fs=require('fs');  // filesystem, class of node
const file1=fs.readFileSync(__dirname+'/textFiles/first.txt','utf-8');
console.log(file1);
const file2=fs.readFileSync(__dirname+'/textFiles/second.txt','utf-8');
console.log(file2);
const file3=fs.readFileSync(__dirname+'/textFiles/third.txt','utf-8');
console.log(file3);

//////// async //////
fs.readFile(__dirname+'/textFiles/first.txt','utf8',(err,content1)=>{
    console.log(content1);
    fs.readFile(__dirname+'/textFiles/second.txt','utf8',(err,content2)=>{
        console.log(content2);
        fs.readFile(__dirname+'/textFiles/third.txt','utf8',(err,content3)=>{
            console.log(content3);
        })
    })
})
console.log('I am the first!');