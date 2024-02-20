let fs = require('fs');
let arrayInpute = process.argv[3];
function writeCallback(err){
    if(err){
        console.log('err',err)
    }
    else{
        console.log('saved')
    }
}
fs.writeFile(process.argv[2],arrayInpute,writeCallback);