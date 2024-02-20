let fs = require('fs');
let arrayInpute = process.argv[3];
function deleteCallback(err){
    if(err){
        console.log('err',err)
    }
    else{
        console.log('deleted')
    } 
}
fs.unlink(process.argv[2],arrayInpute,deleteCallback)