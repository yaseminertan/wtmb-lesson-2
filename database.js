const fs=require('fs');  // filesystem, class of node

function save (fileName,data) {
    fs.writeFile(fileName, JSON.stringify(data));
    //console.log(data);
} 

const load=function(fileName, callbackFunction){
    fs.readFile(fileName,'utf8', (err,file)=>{
        if(err){
            callbackFunction(err);
            return;
        }
        callbackFunction(null,JSON.parse(file));
    });
}

module.exports={save,load};