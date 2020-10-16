const fs=require('fs');  // filesystem, class of node

function save (fileName,data) {
    fs.writeFile(fileName, JSON.stringify(data));
    //console.log(data);
} 

const load=function(fileName, callback){
    fs.readFile(fileName,'utf8', (file)=>{
        callback(JSON.parse(file));
    });
}

module.exports={save,load};