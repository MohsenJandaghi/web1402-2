let fs = require('fs');
let arrayInpute = process.argv[3];
function appendCallback(err){
    if(err){
        console.log('err',err)
    }
    else{
        console.log('saved Changes')
    }
    
}
fs.appendFile(process.argv[2],arrayInpute,appendCallback)